export function usePluginData() {
  return {
    enabled: true,
    buttonLabel: 'Open with AI',
    markdownFile: 'index.md',
    prompt: 'Read {url} and answer my questions using it as context.',
    providers: [
      { label: 'Open in ChatGPT', url: 'https://chatgpt.com/?q={prompt}' },
      { label: 'Open in Claude', url: 'https://claude.ai/new?q={prompt}' },
    ],
  }
}
