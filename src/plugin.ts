import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { LoadContext, Plugin } from '@docusaurus/types'
import type { OpenWithLlmOptions, ResolvedOpenWithLlmOptions } from './types'

const DEFAULT_PROVIDERS = [
  { label: 'Open in ChatGPT', url: 'https://chatgpt.com/?q={prompt}' },
  { label: 'Open in Claude', url: 'https://claude.ai/new?q={prompt}' },
]

export function resolveOptions(options: OpenWithLlmOptions = {}): ResolvedOpenWithLlmOptions {
  const resolved = {
    enabled: options.enabled ?? true,
    buttonLabel: options.buttonLabel ?? 'Open with AI',
    markdownFile: options.markdownFile ?? 'index.md',
    prompt: options.prompt ?? 'Read {url} and answer my questions using it as context.',
    providers: options.providers ?? DEFAULT_PROVIDERS,
  }

  if (!resolved.markdownFile || resolved.markdownFile.startsWith('/')) {
    throw new Error(
      '[docusaurus-plugin-open-with-llm] `markdownFile` must be a non-empty relative path'
    )
  }
  if (!resolved.prompt.includes('{url}')) {
    throw new Error('[docusaurus-plugin-open-with-llm] `prompt` must contain `{url}`')
  }
  for (const provider of resolved.providers) {
    if (!provider.label || !provider.url.includes('{prompt}')) {
      throw new Error(
        '[docusaurus-plugin-open-with-llm] each provider needs a label and a URL containing `{prompt}`'
      )
    }
  }

  return resolved
}

function resolveThemePath(): string {
  const themePath =
    typeof __dirname === 'string'
      ? join(__dirname, 'theme')
      : fileURLToPath(new URL('./theme', import.meta.url))
  if (!existsSync(themePath)) {
    throw new Error('[docusaurus-plugin-open-with-llm] could not resolve the plugin theme path')
  }
  return themePath
}

export default function openWithLlmPlugin(
  _context: LoadContext,
  options: OpenWithLlmOptions = {}
): Plugin<ResolvedOpenWithLlmOptions | undefined> {
  const resolvedOptions = resolveOptions(options)

  return {
    name: 'docusaurus-plugin-open-with-llm',

    getThemePath() {
      return resolveThemePath()
    },

    async loadContent() {
      return resolvedOptions.enabled ? resolvedOptions : undefined
    },

    async contentLoaded({ content, actions }) {
      if (content) actions.setGlobalData(content)
    },
  }
}
