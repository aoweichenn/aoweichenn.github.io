import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter.date && frontmatter.title)
      .map(({ url, frontmatter }) => ({
        url,
        title: String(frontmatter.title),
        date: String(frontmatter.date),
        description: String(frontmatter.description || ''),
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map(String) : []
      }))
      .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'zh-CN'))
  }
})
