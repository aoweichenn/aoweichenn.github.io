<script setup>
import { data as posts } from '../posts.data.js'
import PostList from './PostList.vue'
</script>

<template>
  <div class="blog-container home-page">
    <header class="home-intro">
      <p class="intro-label">你好，我是</p>
      <h1>aoweichen<span aria-hidden="true">.</span></h1>
      <p class="intro-text">这里记录 Nova 的开发过程，以及写代码时遇到的问题。</p>
      <nav class="intro-links" aria-label="个人链接">
        <a href="/nova/">关于 Nova <span aria-hidden="true">→</span></a>
        <a href="/about/">关于我 <span aria-hidden="true">→</span></a>
        <a href="/feed.xml">RSS <span aria-hidden="true">→</span></a>
      </nav>
    </header>

    <section class="home-writing" aria-label="最近文章">
      <div class="section-heading">
        <p class="section-title">最近文章</p>
        <a href="/posts/">全部文章 <span aria-hidden="true">→</span></a>
      </div>
      <PostList :posts="posts.slice(0, 5)" />
      <p v-if="!posts.length" class="archive-empty">还没有文章。</p>
    </section>
    <p class="home-note">正在做 <a href="/nova/">Nova</a> · <a href="/progress/">看看目前的进度</a></p>
  </div>
</template>
