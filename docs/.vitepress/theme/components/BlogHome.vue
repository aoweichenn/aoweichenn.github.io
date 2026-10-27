<script setup>
import { data as posts } from '../posts.data.js'

const featured = posts[0]
const recent = posts.slice(1, 4)
</script>

<template>
  <div class="blog-container">
    <section class="blog-hero" aria-labelledby="blog-title">
      <div class="blog-hero-copy">
        <p class="blog-eyebrow"><span></span> AOWEI / FIELD NOTES</p>
        <h1 id="blog-title">写下正在<br><em>构建的东西。</em></h1>
        <p class="blog-lead">关于 Nova、Agent 工作台和那些值得说清楚的设计选择。这里记录思考、进展，也记录尚未解决的问题。</p>
        <div class="blog-actions">
          <a class="blog-button" href="/posts/">阅读文章 <span aria-hidden="true">↗</span></a>
          <a class="blog-plain-link" href="/nova/">认识 Nova <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="blog-hero-visual" role="img" aria-label="抽象的博客视觉：Nova 项目笔记和工作线索">
        <div class="visual-grid"></div>
        <div class="visual-head"><span class="visual-dot"></span> NOTES / IN PROGRESS <span>001—∞</span></div>
        <div class="visual-ring visual-ring-a"></div>
        <div class="visual-ring visual-ring-b"></div>
        <div class="visual-core">N</div>
        <div class="visual-label visual-label-one"><small>01 / THINK</small><strong>设计</strong></div>
        <div class="visual-label visual-label-two"><small>02 / BUILD</small><strong>实现</strong></div>
        <div class="visual-label visual-label-three"><small>03 / VERIFY</small><strong>验证</strong></div>
        <div class="visual-foot">C++20 <span>·</span> VUE <span>·</span> OPEN NOTES</div>
      </div>
    </section>

    <div class="blog-ticker"><span>DESIGN</span><i></i><span>SYSTEMS</span><i></i><span>AGENTS</span><i></i><span>WORK IN PROGRESS</span></div>

    <section v-if="featured" class="blog-section" aria-labelledby="featured-title">
      <div class="blog-section-head"><span>01 / FEATURED</span><h2 id="featured-title">最新一篇。</h2></div>
      <a class="featured-post" :href="featured.url">
        <div class="featured-side"><span class="featured-index">LATEST NOTE</span><span class="featured-asterisk" aria-hidden="true">N</span><span class="featured-date">{{ featured.date }}</span></div>
        <div class="featured-main"><div class="post-tags"><span v-for="tag in featured.tags" :key="tag">{{ tag }}</span></div><h3>{{ featured.title }}</h3><p>{{ featured.description }}</p><span class="post-read">阅读这篇文章 <span aria-hidden="true">↗</span></span></div>
      </a>
    </section>

    <section class="blog-section" aria-labelledby="recent-title">
      <div class="blog-section-head"><span>02 / RECENT</span><h2 id="recent-title">最近更新。</h2><a href="/posts/">全部文章 →</a></div>
      <div class="recent-grid">
        <a v-for="post in recent" :key="post.url" class="recent-card" :href="post.url"><span class="recent-date">{{ post.date }}</span><div class="post-tags"><span v-for="tag in post.tags" :key="tag">{{ tag }}</span></div><h3>{{ post.title }}</h3><p>{{ post.description }}</p><span class="recent-arrow" aria-hidden="true">↗</span></a>
        <a class="recent-card recent-about" href="/nova/"><span class="recent-date">PROJECT / NOVA</span><h3>这个博客从 Nova 开始。</h3><p>认识这个正在迭代的 C++20 Agent 工作台。</p><span class="recent-arrow" aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="blog-endnote" aria-label="订阅与源代码">
      <div><span class="blog-eyebrow">KEEP READING</span><h2>下一篇，继续写。</h2><p>文章以 Markdown 保存在公开仓库中，新的记录会出现在归档和 RSS 里。</p></div>
      <div class="endnote-links"><a href="/feed.xml">订阅 RSS ↗</a><a href="https://github.com/aoweichenn/aoweichenn.github.io" target="_blank" rel="noopener noreferrer">查看网站源码 ↗</a></div>
    </section>
  </div>
</template>
