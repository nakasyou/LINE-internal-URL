import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LINE-internal-URL project',
  description: 'LINE内部スキーマをまとめるプロジェクト。',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],
  themeConfig: {
    // theme-level options
  }
})
