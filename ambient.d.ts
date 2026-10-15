declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '@theme-init/DocItem/Layout' {
  import type { ComponentType } from 'react'
  const Layout: ComponentType<Record<string, unknown>>
  export default Layout
}

declare module '@docusaurus/router' {
  export function useLocation(): { pathname: string }
}

declare module '@docusaurus/useBaseUrl' {
  export default function useBaseUrl(path: string): string
}

declare module '@docusaurus/useDocusaurusContext' {
  export default function useDocusaurusContext(): { siteConfig: { url: string } }
}

declare module '@docusaurus/useGlobalData' {
  export function usePluginData(pluginName: string): unknown
}
