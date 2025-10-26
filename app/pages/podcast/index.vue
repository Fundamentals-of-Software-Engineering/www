<template>
  <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
    <Container>
      <h1 class="text-2xl font-bold text-slate-900 leading-7">Episodes</h1>
    </Container>
    <div class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
      <article
        v-for="episode in episodes"
        :key="episode.id"
        :aria-labelledby="`episode-${episode.id}-title`"
        class="py-10 sm:py-12"
      >
        <Container>
          <div class="flex flex-col items-start">
            <h2
              :id="`episode-${episode.id}-title`"
              class="mt-2 text-lg font-bold text-slate-900"
            >
              <NuxtLink
                :to="`/podcast/${episode.id}`"
                class="hover:text-slate-600 transition-colors"
              >
                {{ episode.title }}
              </NuxtLink>
            </h2>
            <time
              :datetime="episode.published.toISOString()"
              class="order-first font-mono text-sm text-slate-500 leading-7"
            >
              {{ formatDate(episode.published) }}
            </time>
            <p class="mt-1 text-base text-slate-700 leading-7">
              {{ episode.description }}
            </p>
            <div class="mt-4 flex items-center gap-4">
              <button
                @click="audioStore.toggle(episode)"
                class="flex items-center gap-x-3 text-sm font-bold text-blue-600 hover:text-blue-700 active:text-blue-900 transition-colors leading-6"
                :aria-label="`${audioStore.currentEpisode?.id === episode.id && audioStore.isPlaying ? 'Pause' : 'Play'} episode ${episode.title}`"
              >
                <PauseIcon v-if="audioStore.currentEpisode?.id === episode.id && audioStore.isPlaying" class="h-2.5 w-2.5 fill-current" />
                <PlayIcon v-else class="h-2.5 w-2.5 fill-current" />
                <span aria-hidden="true">Listen</span>
              </button>
              <span aria-hidden="true" class="text-sm font-bold text-slate-400">/</span>
              <NuxtLink
                :to="`/podcast/${episode.id}`"
                class="flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 active:text-blue-900 transition-colors leading-6"
                :aria-label="`Show notes for episode ${episode.title}`"
              >
                Show notes
              </NuxtLink>
            </div>
          </div>
        </Container>
      </article>
    </div>
  </div>
</template>

<script setup>
import { episodes } from '~/data/episodes'
import { useAudioStore } from '~/stores/audio'

definePageMeta({
  layout: 'podcast'
})

const audioStore = useAudioStore()
const siteUrl = 'https://fundamentalsofswe.com'

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: 'FOSE Podcast - Fundamentals of Software Engineering',
  description: 'Listen to the FOSE Podcast and learn software engineering fundamentals beyond coding. Weekly episodes featuring expert insights on maintainability, architecture, and career growth.',
  ogTitle: 'FOSE Podcast - Fundamentals of Software Engineering',
  ogDescription: 'Learn software engineering fundamentals beyond coding with weekly podcast episodes from industry experts.',
  ogImage: `${siteUrl}/images/poster.jpg`,
  ogUrl: `${siteUrl}/podcast`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'FOSE Podcast',
  twitterDescription: 'Software engineering fundamentals beyond coding - weekly podcast episodes.',
  twitterImage: `${siteUrl}/images/poster.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/podcast` },
    { rel: 'alternate', type: 'application/rss+xml', title: 'FOSE Podcast RSS Feed', href: `${siteUrl}/rss.xml` }
  ]
})
</script>
