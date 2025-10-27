<template>
  <article class="group relative flex flex-col h-full border border-slate-200 rounded-2xl p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-lg">
    <NuxtLink
      :to="`/blog/${slug}`"
      class="absolute inset-0 z-10"
      :aria-label="`Read ${title}`"
    />

    <time
      v-if="publishedAt"
      :datetime="publishedAt"
      class="font-mono text-sm text-slate-500 leading-7"
    >
      {{ formatDate(publishedAt) }}
    </time>

    <h2 class="mt-3 text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
      {{ title }}
    </h2>

    <p class="mt-4 text-base text-slate-700 leading-7 line-clamp-3 flex-grow">
      {{ description }}
    </p>

    <div v-if="author" class="mt-6 pt-6 border-t border-slate-100 flex items-center gap-x-4">
      <NuxtImg
        :src="author.image"
        :alt="author.name"
        class="h-12 w-12 rounded-full bg-slate-100"
        width="48"
        height="48"
      />
      <div class="text-sm leading-6">
        <p class="font-semibold text-slate-900">
          {{ author.name }}
        </p>
        <p class="text-slate-600">
          {{ author.role }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  slug: {
    type: String,
    required: true
  },
  publishedAt: {
    type: String,
    default: ''
  },
  author: {
    type: Object,
    default: null
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date)
}
</script>
