<script setup>
import { data as posts } from '../posts.data.js'
</script>

<template>
  <div class="blog-container blog-home">
    <header class="home-intro">
      <p class="kicker">aoweichen 的个人博客</p>
      <h1>开发笔记</h1>
      <p>最近主要在写 Nova。这里记下做过的改动、遇到的问题，还有一些暂时没想明白的事。</p>
    </header>

    <div class="home-columns">
      <section class="home-posts" aria-labelledby="recent-title">
        <div class="list-heading">
          <h2 id="recent-title">最近文章</h2>
          <a href="/posts/">全部文章 <span aria-hidden="true">→</span></a>
        </div>
        <article v-for="post in posts" :key="post.url" class="post-row">
          <time :datetime="post.date">{{ post.date }}</time>
          <div>
            <h3><a :href="post.url">{{ post.title }}</a></h3>
            <p>{{ post.description }}</p>
            <div class="post-tags"><span v-for="tag in post.tags" :key="tag">{{ tag }}</span></div>
          </div>
        </article>
      </section>

      <aside class="home-aside" aria-label="关于博客">
        <section>
          <h2>正在做</h2>
          <p><strong>Nova</strong>，一个用 C++20 写的 Agent 工作台。目前还是原型，Web、终端和 CLI 都在继续打磨。</p>
          <a href="/nova/">项目介绍 →</a>
          <a href="/progress/">当前进展 →</a>
        </section>
        <section>
          <h2>订阅与源码</h2>
          <p>新文章会出现在 RSS。网站本身用 Vue 和 VitePress 构建。</p>
          <a href="/feed.xml">RSS 订阅 →</a>
          <a href="https://github.com/aoweichenn/aoweichenn.github.io" target="_blank" rel="noopener noreferrer">网站源码 ↗</a>
        </section>
      </aside>
    </div>
  </div>
</template>
