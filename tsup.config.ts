import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'client/index': 'src/client/index.ts',
    'components/OpenWithLlm': 'src/components/OpenWithLlm.tsx',
    'theme/DocItem/Layout/index': 'src/theme/DocItem/Layout/index.tsx',
  },
  dts: true,
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  target: 'es2021',
  external: [
    '@docusaurus/router',
    '@docusaurus/useBaseUrl',
    '@docusaurus/useDocusaurusContext',
    '@docusaurus/useGlobalData',
    '@theme-init/DocItem/Layout',
    'react',
    'react-dom',
  ],
  loader: { '.css': 'copy' },
  esbuildOptions(options) {
    options.logOverride = { 'empty-import-meta': 'silent' }
  },
})
