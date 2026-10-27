<script setup>
import { computed } from 'vue'

const props = defineProps({ posts: { type: Array, required: true } })

const groups = computed(() => {
  const years = new Map()
  for (const post of props.posts) {
    const year = /^\d{4}-/.test(post.date) ? post.date.slice(0, 4) : '其他'
    if (!years.has(year)) years.set(year, [])
    years.get(year).push(post)
  }
  return [...years].map(([year, posts]) => ({ year, posts }))
})

function shortDate(date) {
  const match = /^\d{4}-(\d{2})-(\d{2})$/.exec(date)
  return match ? `${Number(match[1])} 月 ${Number(match[2])} 日` : date
}
</script>

<template>
  <div class="year-archive">
    <section v-for="group in groups" :key="group.year" class="year-group" :aria-label="`${group.year} 年的文章`">
      <h2 class="year-heading">{{ group.year }}</h2>
      <ol class="year-posts">
        <li v-for="post in group.posts" :key="post.url">
          <article class="archive-entry">
            <div class="entry-copy">
              <h3><a :href="post.url">{{ post.title }}</a></h3>
              <p v-if="post.description">{{ post.description }}</p>
              <div v-if="post.tags.length" class="entry-tags" :aria-label="`标签：${post.tags.join('、')}`">
                <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <time :datetime="post.date">{{ shortDate(post.date) }}</time>
          </article>
        </li>
      </ol>
    </section>
  </div>
</template>
