import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'

const siteUrl = 'https://aoweichenn.github.io'
const sourceDir = 'docs/posts'
const output = 'docs/.vitepress/dist/feed.xml'
const escapeXml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
})[char])

const files = (await readdir(sourceDir)).filter((name) => name.endsWith('.md') && name !== 'index.md')
const posts = []
for (const file of files) {
  const { data } = matter(await readFile(join(sourceDir, file), 'utf8'))
  if (!data.title || !data.date || !data.description) throw new Error(`Incomplete post metadata: ${file}`)
  posts.push({
    title: String(data.title),
    date: String(data.date),
    description: String(data.description),
    url: `/posts/${file.slice(0, -3)}`
  })
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'zh-CN'))
const items = posts.map((post) => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${siteUrl}${escapeXml(post.url)}</link>
    <guid>${siteUrl}${escapeXml(post.url)}</guid>
    <pubDate>${new Date(`${post.date}T00:00:00+08:00`).toUTCString()}</pubDate>
    <description>${escapeXml(post.description)}</description>
  </item>`).join('')
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Aowei / Notes</title>
  <link>${siteUrl}/</link>
  <description>记录 Nova 的设计、实现与验证。</description>
  <language>zh-cn</language>${items}
</channel></rss>\n`
await writeFile(output, feed)
console.log(`Generated RSS with ${posts.length} posts`)
