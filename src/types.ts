export interface ProviderOptions {
  /** Menu label. */
  label: string
  /** URL containing `{prompt}`, which is replaced with the encoded page prompt. */
  url: string
}

export interface OpenWithLlmOptions {
  /** Show or hide the widget without removing the plugin. @default true */
  enabled?: boolean
  /** Text shown on the trigger button. @default "Open with AI" */
  buttonLabel?: string
  /** Path appended to each docs route. @default "index.md" */
  markdownFile?: string
  /** Prompt sent to configured providers. Use `{url}` for the Markdown URL. */
  prompt?: string
  /** LLM destinations shown after the copy and view actions. */
  providers?: ProviderOptions[]
}

export interface ResolvedOpenWithLlmOptions {
  enabled: boolean
  buttonLabel: string
  markdownFile: string
  prompt: string
  providers: ProviderOptions[]
}
