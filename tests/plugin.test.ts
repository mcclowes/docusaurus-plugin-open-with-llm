import { describe, expect, it, vi } from 'vitest'
import openWithLlmPlugin, { resolveOptions } from '../src/plugin'

describe('plugin options', () => {
  it('resolves useful defaults', () => {
    expect(resolveOptions()).toMatchObject({
      enabled: true,
      buttonLabel: 'Open with AI',
      markdownFile: 'index.md',
    })
  })

  it('validates configurable URL templates', () => {
    expect(() => resolveOptions({ prompt: 'Read this page' })).toThrow('must contain `{url}`')
    expect(() =>
      resolveOptions({ providers: [{ label: 'Example', url: 'https://example.com' }] })
    ).toThrow('URL containing `{prompt}`')
  })

  it('publishes resolved options as global data', async () => {
    const plugin = openWithLlmPlugin({} as never, { buttonLabel: 'Ask an LLM' })
    const content = await plugin.loadContent?.()
    const setGlobalData = vi.fn()

    await plugin.contentLoaded?.({ content, actions: { setGlobalData } } as never)

    expect(setGlobalData).toHaveBeenCalledWith(
      expect.objectContaining({ buttonLabel: 'Ask an LLM' })
    )
  })
})
