import { defineConfig } from 'vitest/config'
import utopiaPlugin from '@matthesketh/utopia-vite-plugin'
import { utopiaTestPlugin } from '@matthesketh/utopia-test/plugin'

export default defineConfig({
  plugins: [utopiaPlugin(), utopiaTestPlugin({ include: ['src'] })],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.utopia.test.ts'],
    globals: true,
  },
})
