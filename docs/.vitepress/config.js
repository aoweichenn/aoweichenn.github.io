import { defineConfig } from 'vitepress'

const siteUrl = 'https://aoweichenn.github.io'

export default defineConfig({
  lang: 'zh-CN',
  title: 'aoweichen 的博客',
  description: '记录 Nova 开发过程的个人博客。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'aoweichen 的博客 RSS', href: '/feed.xml' }],
    ['meta', { name: 'theme-color', content: '#faf9f6' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'aoweichen',
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
      message: 'Vue + VitePress · 网站源码公开在 GitHub',
      copyright: '© 2026 aoweichen'
    }
  }
})
