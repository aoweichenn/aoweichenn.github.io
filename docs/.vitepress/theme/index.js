import DefaultTheme from 'vitepress/theme'
import BlogLayout from './BlogLayout.vue'
import BlogHome from './components/BlogHome.vue'
import BlogIndex from './components/BlogIndex.vue'
import PostMeta from './components/PostMeta.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: BlogLayout,
  enhanceApp({ app }) {
    app.component('BlogHome', BlogHome)
    app.component('BlogIndex', BlogIndex)
    app.component('PostMeta', PostMeta)
  }
}
