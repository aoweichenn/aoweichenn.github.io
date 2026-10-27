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
    <header class="archive-head">
      <p class="kicker">文章</p>
      <h1>所有文章</h1>
      <p>目前主要写 Nova。可以按标签筛选，或者搜标题和摘要。</p>
    </header>
    <div class="archive-tools">
      <div class="archive-tags" role="group" aria-label="按标签筛选">
        <button v-for="tag in tags" :key="tag" type="button" :aria-pressed="selectedTag === tag" @click="selectedTag = tag">{{ tag }}</button>
      </div>
      <div class="archive-search">
        <label for="archive-query">搜索</label>
        <input id="archive-query" v-model="query" type="search" placeholder="标题、摘要或标签" autocomplete="off">
      </div>
    </div>
    <p class="archive-count">{{ visiblePosts.length }} 篇文章</p>
    <div v-if="visiblePosts.length" class="archive-list">
      <article v-for="post in visiblePosts" :key="post.url" class="post-row">
        <time :datetime="post.date">{{ post.date }}</time>
        <div>
          <h2><a :href="post.url">{{ post.title }}</a></h2>
          <p>{{ post.description }}</p>
          <div class="post-tags"><span v-for="tag in post.tags" :key="tag">{{ tag }}</span></div>
        </div>
      </article>
    </div>
    <p v-else class="archive-empty">没有找到文章，换个词试试。</p>
  </div>
</template>
