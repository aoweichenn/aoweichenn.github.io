import { defineConfig } from 'vitepress'

const siteUrl = 'https://aoweichenn.github.io'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Aowei / Notes',
  description: '记录 Nova 的设计、实现与验证：关于 Agent 工作台的开发笔记。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Aowei / Notes RSS', href: '/feed.xml' }],
    ['meta', { name: 'theme-color', content: '#f7f6f1' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'aowei / notes',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: 'Nova', items: [
        { text: '项目介绍', link: '/nova/' },
        { text: '设计说明', link: '/design/' },
        { text: '项目进展', link: '/progress/' }
      ] },
      { text: '关于', link: '/about/' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择', selectKeyAriaLabel: '输入',
                  navigateText: '导航', navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头', closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/aoweichenn' }],
    outline: { label: '本文目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    footer: {
      message: 'Built with Vue & VitePress · Nova is still a prototype.',
      copyright: '© 2026 Aowei Chen'
    }
  }
})
