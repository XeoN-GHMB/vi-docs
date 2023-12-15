import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vi Documentation",
  description: "Documentation of a veriety of vi libraries",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/icon-docs.svg' }], 
  ],
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
            text: 'Overview',
            link: '/docs/admin/index.md'
          },
          {
            text: 'VIUR configurations',
            collapsed: false,
            items: [
              { text: 'Settings', link: '/docs/admin/viur/settings.md' },
              { text: 'Admininfo', link: '/docs/admin/viur/admininfo.md' },
            ]
          },
          {
            text: 'Admin customizing',
            collapsed: false,
            items: [
              { text: 'Setup', link: '/docs/admin/customizing/setup.md' },
              { text: 'Topbar actions', link: '/docs/admin/customizing/topbar.md' },
              { text: 'Floatingbar actions', link: '/docs/admin/customizing/floatingbar.md' },
              { text: 'Fluidpage element', link: '/docs/admin/customizing/fluidpage.md' },
              { text: 'Custom Bone Widgets', link: '/docs/admin/customizing/boneedit.md' },
              { text: 'Listhandler Custom Bone Widget', link: '/docs/admin/customizing/boneview.md' },
              { text: 'Add a custom tab', link: '/docs/admin/customizing/tab.md' },
            ]
          }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XeoN-GHMB/vi-docs' }
    ]
  }
})
