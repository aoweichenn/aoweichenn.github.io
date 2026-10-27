<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { data as posts } from './posts.data.js'

const { page } = useData()
const postPath = computed(() => {
  const match = /^posts\/([^/]+)\.md$/.exec(page.value.relativePath)
  return match && match[1] !== 'index' ? `/posts/${match[1]}` : null
})
const relatedPosts = computed(() => posts
  .filter((post) => post.url.replace(/\.html$/, '') !== postPath.value)
  .slice(0, 2))
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <nav v-if="postPath" class="article-back" aria-label="文章导航">
        <a href="/posts/">← 所有文章</a>
      </nav>
    </template>
    <template #doc-after>
      <section v-if="postPath && relatedPosts.length" class="article-related" aria-labelledby="related-heading">
        <h2 id="related-heading">继续阅读</h2>
        <ul>
          <li v-for="post in relatedPosts" :key="post.url"><a :href="post.url">{{ post.title }} <span aria-hidden="true">→</span></a></li>
        </ul>
      </section>
    </template>
  </DefaultTheme.Layout>
</template>
