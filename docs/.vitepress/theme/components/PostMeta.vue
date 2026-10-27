<script setup>
defineProps({ date: { type: String, required: true }, tags: { type: Array, default: () => [] } })
</script>

<template>
  <div class="article-meta"><time :datetime="date">{{ date }}</time><span class="meta-divider" aria-hidden="true"></span><span v-for="tag in tags" :key="tag" class="meta-tag">{{ tag }}</span></div>
</template>
