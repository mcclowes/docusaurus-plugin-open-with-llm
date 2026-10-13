import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))

export default {
  title: 'Acme developer docs',
  tagline: 'A live demo of docusaurus-plugin-open-with-llm',
  url: 'http://localhost:3000',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: path.join(here, 'sidebars.mjs'),
        },
        blog: false,
        theme: { customCss: path.join(here, 'src/css/custom.css') },
      },
    ],
  ],
  plugins: [
    [
      path.join(here, '../../dist/index.cjs'),
      {
        buttonLabel: 'Open with AI',
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Acme docs',
      items: [{ to: '/payments', label: 'Payments', position: 'left' }],
    },
    colorMode: { respectPrefersColorScheme: true },
  },
}
