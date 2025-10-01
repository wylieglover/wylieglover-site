// site/astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://wylieglover.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  output: 'static',
  vite: {
    optimizeDeps: { exclude: ['@astrojs/check'] }
  }
})
