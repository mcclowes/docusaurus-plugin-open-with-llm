import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import OpenWithLlm, { buildAbsoluteUrl, buildMarkdownUrl } from '../src/components/OpenWithLlm'

describe('URL helpers', () => {
  it('builds Markdown URLs for routes with and without trailing slashes', () => {
    expect(buildMarkdownUrl('/guide', '/docs/', 'index.md')).toBe('/docs/guide/index.md')
    expect(buildMarkdownUrl('/guide/', '/docs/', 'page.md')).toBe('/docs/guide/page.md')
  })

  it.each([
    ['/docs/guide', '/docs/', 'index.md', '/docs/guide/index.md'],
    ['/docs/guide/', '/docs/', 'page.md', '/docs/guide/page.md'],
    ['/docs', '/docs/', 'index.md', '/docs/index.md'],
    ['/manual/docs/guide', '/manual/', 'index.md', '/manual/docs/guide/index.md'],
    ['/docs-extra/guide', '/docs/', 'index.md', '/docs/docs-extra/guide/index.md'],
    ['/', '/', 'index.md', '/index.md'],
    ['/guide', '/', 'page.md', '/guide/page.md'],
  ])('keeps the base path once for %s', (pathname, baseUrl, filename, expected) => {
    expect(buildMarkdownUrl(pathname, baseUrl, filename)).toBe(expected)
  })

  it('makes URLs absolute when the site URL is valid', () => {
    expect(buildAbsoluteUrl('https://example.com', '/docs/guide/index.md')).toBe(
      'https://example.com/docs/guide/index.md'
    )
  })
})

describe('OpenWithLlm', () => {
  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('opens a menu with Markdown and provider actions', () => {
    render(<OpenWithLlm />)
    fireEvent.click(screen.getByRole('button', { name: 'Open with AI' }))

    expect(screen.getByRole('menuitem', { name: /Copy as Markdown/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /View as Markdown/ })).toHaveAttribute(
      'href',
      '/docs/guides/payments/index.md'
    )
    expect(screen.getByRole('menuitem', { name: /Download as Markdown/ })).toHaveAttribute(
      'download',
      'index.md'
    )
    expect(screen.getByRole('menuitem', { name: /Open in ChatGPT/ })).toHaveAttribute(
      'href',
      expect.stringContaining(
        encodeURIComponent('https://example.com/docs/guides/payments/index.md')
      )
    )
    expect(screen.getByRole('menuitem', { name: /Open in ChatGPT/ }).querySelector('svg')).not.toBe(
      null
    )
    expect(screen.getByRole('menuitem', { name: /Open in Claude/ }).querySelector('svg')).not.toBe(
      null
    )
  })

  it('copies the fetched Markdown', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, text: () => 'Page content' }))
    render(<OpenWithLlm />)
    fireEvent.click(screen.getByRole('button', { name: 'Open with AI' }))
    fireEvent.click(screen.getByRole('menuitem', { name: /Copy as Markdown/ }))

    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Page content'))
    expect(fetch).toHaveBeenCalledWith('/docs/guides/payments/index.md')
    expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument()
  })
})
