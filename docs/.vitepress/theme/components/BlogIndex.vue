<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../posts.data.js'
import PostList from './PostList.vue'

const query = ref('')
const selectedTag = ref('全部')
const tags = computed(() => ['全部', ...new Set(posts.flatMap((post) => post.tags))])
const visiblePosts = computed(() => {
  const term = query.value.trim().toLocaleLowerCase()
  return posts.filter((post) => {
    const matchesTag = selectedTag.value === '全部' || post.tags.includes(selectedTag.value)
    const searchable = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLocaleLowerCase()
    return matchesTag && (!term || searchable.includes(term))
  })
})
</script>

<template>
  <div class="blog-container archive-page">
    <header class="archive-head">
      <a class="back-link" href="/">← 首页</a>
      <h1>文章</h1>
      <p>关于 Nova 的设计和开发记录。</p>
    </header>
    <div class="archive-tools">
      <div class="archive-tags" role="group" aria-label="按标签筛选">
        <button v-for="tag in tags" :key="tag" type="button" :aria-pressed="selectedTag === tag" @click="selectedTag = tag">{{ tag }}</button>
      </div>
      <div class="archive-search">
        <label for="archive-query">搜索文章</label>
        <input id="archive-query" v-model="query" type="search" placeholder="标题、摘要或标签" autocomplete="off">
      </div>
    </div>
    <p class="archive-count" aria-live="polite">{{ visiblePosts.length }} 篇文章</p>
    <PostList v-if="visiblePosts.length" :posts="visiblePosts" />
    <p v-else class="archive-empty">没有找到文章，换个词试试。</p>
  </div>
</template>
