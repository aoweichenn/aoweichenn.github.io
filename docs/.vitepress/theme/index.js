import DefaultTheme from 'vitepress/theme'
import BlogHome from './components/BlogHome.vue'
import BlogIndex from './components/BlogIndex.vue'
import PostMeta from './components/PostMeta.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogHome', BlogHome)
    app.component('BlogIndex', BlogIndex)
    app.component('PostMeta', PostMeta)
  }
}
