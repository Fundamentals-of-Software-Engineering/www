<template>
  <div v-if="videoId" :class="['aspect-video w-full', className]">
    <iframe
      class="h-full w-full rounded-lg"
      :src="`https://www.youtube.com/embed/${videoId}`"
      :title="title || 'YouTube video player'"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
