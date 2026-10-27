<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../posts.data.js'

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
    <header class="archive-head"><p class="blog-eyebrow"><span></span> ALL ENTRIES</p><h1>文章归档<span class="archive-period">.</span></h1><p>围绕 Nova，记录设计、实现与验证。按标签浏览，也可以直接搜索标题和摘要。</p></header>
    <div class="archive-tools"><div class="archive-tags" role="group" aria-label="按标签筛选"><button v-for="tag in tags" :key="tag" type="button" :aria-pressed="selectedTag === tag" @click="selectedTag = tag">{{ tag }}</button></div><div class="archive-search"><label for="archive-query">搜索文章</label><input id="archive-query" v-model="query" type="search" placeholder="搜索标题、摘要或标签…" autocomplete="off"></div></div>
    <div class="archive-count">{{ visiblePosts.length }} 篇文章</div>
    <div v-if="visiblePosts.length" class="archive-list"><a v-for="post in visiblePosts" :key="post.url" class="archive-item" :href="post.url"><span class="archive-item-date">{{ post.date }}</span><div><div class="post-tags"><span v-for="tag in post.tags" :key="tag">{{ tag }}</span></div><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div><span class="archive-item-arrow" aria-hidden="true">↗</span></a></div>
    <p v-else class="archive-empty">没有找到匹配的文章。试试其他关键词或标签。</p>
  </div>
</template>
