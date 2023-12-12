import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vi Documentation",
  description: "Documentation of a veriety of vi libraries",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ignite', link: '/docs/ignite/index.md' },
      { text: 'Shoelace', link: 'https://serene-allen-537100.netlify.app/' },
      { text: 'Utils', link: '/docs/utils/index.md' },
      { text: 'Components', link: '/docs/components/index.md' },
      { text: 'Admin', link: '/docs/admin/index.md' },
    ],

    sidebar: {
      '/docs/ignite':[
          {
            text: 'Examples',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
      ],
      '/docs/utils':[
          {
            text: 'Examples',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
      ],
      '/docs/components':[
          {
            text: 'Examples',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
      ],
      '/docs/admin':[
          {
            text: 'Examples',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XeoN-GHMB/vi-docs' }
    ]
  }
})
