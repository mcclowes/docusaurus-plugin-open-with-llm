import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

const require = createRequire(import.meta.url)

for (const format of ['import', 'require']) {
  test(`${format} loads the plugin and resolves its packaged theme`, async () => {
    const entry =
      format === 'import'
        ? await import('docusaurus-plugin-open-with-llm')
        : require('docusaurus-plugin-open-with-llm')
    const plugin = entry.default({}, {})
    assert.equal(plugin.name, 'docusaurus-plugin-open-with-llm')
    const theme = plugin.getThemePath()
    assert.ok(existsSync(join(theme, 'DocItem/Layout/index.js')))
    const content = await plugin.loadContent()
    let globalData
    await plugin.contentLoaded({
      content,
      actions: { setGlobalData: (value) => (globalData = value) },
    })
    assert.equal(globalData, content)
  })
}

test('the packaged layout wraps the initial theme without importing itself', async () => {
  const { loadThemeAliases } = require('@docusaurus/core/lib/webpack/aliases/index.js')
  const root = mkdtempSync(join(tmpdir(), 'open-with-llm-theme-'))
  try {
    const initialTheme = join(root, 'theme')
    const initialLayout = join(initialTheme, 'DocItem/Layout/index.js')
    mkdirSync(join(initialTheme, 'DocItem/Layout'), { recursive: true })
    writeFileSync(initialLayout, 'export default function Layout() { return null }\n')
    const theme = require('docusaurus-plugin-open-with-llm').default({}, {}).getThemePath()
    const layout = readFileSync(join(theme, 'DocItem/Layout/index.js'), 'utf8')
    const inherited = layout.match(/from ['"](@theme-(?:original|init)\/DocItem\/Layout)['"]/)
    assert.ok(inherited, 'The wrapper must import its inherited layout')
    const aliases = await loadThemeAliases({
      siteDir: root,
      plugins: [
        { path: root, getThemePath: () => initialTheme },
        { path: root, getThemePath: () => theme },
      ],
    })
    assert.equal(
      aliases[inherited[1]],
      initialLayout,
      'The inherited layout must not be the wrapper'
    )
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
