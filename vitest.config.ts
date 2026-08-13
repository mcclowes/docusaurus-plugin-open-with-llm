import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: './.vitest',
  resolve: {
    alias: {
      '@docusaurus/router': path.resolve('tests/mocks/router.ts'),
      '@docusaurus/useBaseUrl': path.resolve('tests/mocks/useBaseUrl.ts'),
      '@docusaurus/useDocusaurusContext': path.resolve('tests/mocks/useDocusaurusContext.ts'),
      '@docusaurus/useGlobalData': path.resolve('tests/mocks/useGlobalData.ts'),
    },
  },
  test: { environment: 'jsdom', setupFiles: ['./tests/setup.ts'] },
})
