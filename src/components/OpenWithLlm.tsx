import { useEffect, useRef, useState } from 'react'
import { useLocation } from '@docusaurus/router'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { usePluginData } from '@docusaurus/useGlobalData'
import type { ResolvedOpenWithLlmOptions } from '../types'
import styles from './OpenWithLlm.module.css'
import { ChatGptIcon, ClaudeIcon } from './ProviderIcons'

const PLUGIN_NAME = 'docusaurus-plugin-open-with-llm'

export function buildMarkdownUrl(pathname: string, baseUrl: string, markdownFile: string): string {
  const route = pathname.endsWith('/') ? pathname : `${pathname}/`
  return `${baseUrl.replace(/\/$/, '')}${route}${markdownFile}`
}

export function buildAbsoluteUrl(siteUrl: string, relativeUrl: string): string {
  try {
    return new URL(relativeUrl, siteUrl).toString()
  } catch {
    return relativeUrl
  }
}

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ProviderIcon({ url }: { url: string }) {
  if (url.includes('chatgpt.com')) return <ChatGptIcon className={styles.providerIcon} />
  if (url.includes('claude.ai')) return <ClaudeIcon className={styles.providerIcon} />
  return null
}

export default function OpenWithLlm() {
  const options = usePluginData(PLUGIN_NAME) as unknown as ResolvedOpenWithLlmOptions
  const { siteConfig } = useDocusaurusContext()
  const { pathname } = useLocation()
  const baseUrl = useBaseUrl('/')
  const containerRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const markdownUrl = buildMarkdownUrl(pathname, baseUrl, options.markdownFile)
  const absoluteMarkdownUrl = buildAbsoluteUrl(siteConfig.url, markdownUrl)
  const prompt = encodeURIComponent(options.prompt.replaceAll('{url}', absoluteMarkdownUrl))

  useEffect(() => {
    if (!open) return
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node))
        setOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const copyMarkdown = async () => {
    try {
      const response = await fetch(markdownUrl)
      if (!response.ok) throw new Error(`Fetch failed: ${response.status}`)
      await navigator.clipboard.writeText(await response.text())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.open(markdownUrl, '_blank', 'noopener,noreferrer')
    }
    setOpen(false)
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {copied ? <CheckIcon /> : <SparkIcon />}
        <span>{copied ? 'Copied' : options.buttonLabel}</span>
        <ChevronIcon />
      </button>
      {open && (
        <div className={styles.menu} role="menu">
          <button type="button" role="menuitem" className={styles.menuItem} onClick={copyMarkdown}>
            <span className={styles.menuLabel}>Copy as Markdown</span>
            <span className={styles.menuHint}>Paste into any AI chat as context</span>
          </button>
          <a
            role="menuitem"
            className={styles.menuItem}
            href={markdownUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className={styles.menuLabel}>View as Markdown</span>
            <span className={styles.menuHint}>Open the raw .md source</span>
          </a>
          <a
            role="menuitem"
            className={styles.menuItem}
            href={markdownUrl}
            download={options.markdownFile}
            onClick={() => setOpen(false)}
          >
            <span className={styles.menuLabel}>Download as Markdown</span>
            <span className={styles.menuHint}>Save the .md source</span>
          </a>
          {options.providers.map((provider) => (
            <a
              key={provider.label}
              role="menuitem"
              className={styles.menuItem}
              href={provider.url.replaceAll('{prompt}', prompt)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <ProviderIcon url={provider.url} />
              <span className={styles.menuText}>
                <span className={styles.menuLabel}>{provider.label}</span>
                <span className={styles.menuHint}>Pre-fill a chat with this page</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
