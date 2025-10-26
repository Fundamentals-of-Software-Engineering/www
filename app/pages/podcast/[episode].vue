<template>
  <article class="py-16 lg:py-36">
    <Container>
      <header class="flex flex-col">
        <div class="flex items-center gap-6">
          <button
            @click="audioStore.toggle(episode)"
            class="group relative flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-4"
            :aria-label="`${audioStore.currentEpisode?.id === episode.id && audioStore.isPlaying ? 'Pause' : 'Play'} episode ${episode.title}`"
          >
            <PauseIcon v-if="audioStore.currentEpisode?.id === episode.id && audioStore.isPlaying" class="h-9 w-9 fill-white group-active:fill-white/80" />
            <PlayIcon v-else class="h-9 w-9 fill-white group-active:fill-white/80" />
          </button>
          <div class="flex flex-col">
            <h1 class="mt-2 text-4xl font-bold text-slate-900">
              {{ episode.title }}
            </h1>
            <time
              :datetime="episode.published.toISOString()"
              class="order-first font-mono text-sm text-slate-500 leading-7"
            >
              {{ formatDate(episode.published) }}
            </time>
          </div>
        </div>
        <p class="mt-3 ml-24 text-lg font-medium text-slate-700 leading-8">
          {{ episode.description }}
        </p>
      </header>

      <hr class="my-12 border-gray-200" />

      <!-- YouTube Video if available -->
      <div v-if="episode.videoId" class="mt-8">
        <h2 class="flex items-center font-mono text-sm font-medium text-slate-900 leading-7">
          <span class="mr-3 h-3 w-1.5 rounded-r-full bg-cyan-200" />
          Watch Episode
        </h2>
        <YouTubeEmbed
          :video-id="episode.videoId"
          :title="episode.title"
          class-name="mt-6"
        />
      </div>

      <!-- Show Notes -->
      <div
        class="prose mt-14 max-w-none prose-slate prose-headings:font-mono prose-headings:text-sm prose-headings:font-medium prose-headings:text-slate-900 prose-headings:leading-7 prose-h2:mt-12 prose-h2:flex prose-h2:items-center prose-h2:before:mr-3 prose-h2:before:h-3 prose-h2:before:w-1.5 prose-h2:before:rounded-r-full prose-h2:before:bg-cyan-200 prose-h2:nth-of-type(3n):before:bg-violet-200 prose-h2:nth-of-type(3n+2):before:bg-indigo-200 prose-p:leading-7 prose-ul:mt-6 prose-ul:list-['\2013\20'] prose-ul:pl-5 prose-li:leading-7"
        v-html="episode.content"
      />
    </Container>
  </article>
</template>

<script setup>
import { getEpisodeById } from '~/data/episodes'
import { useAudioStore } from '~/stores/audio'

definePageMeta({
  layout: 'podcast'
})

const audioStore = useAudioStore()
const route = useRoute()
const episodeId = route.params.episode
const siteUrl = 'https://fundamentalsofswe.com'

const episode = getEpisodeById(episodeId)

if (!episode) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Episode not found'
  })
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: `${episode.title} - FOSE Podcast`,
  description: episode.description,
  ogTitle: `${episode.title} - FOSE Podcast`,
  ogDescription: episode.description,
  ogImage: `${siteUrl}/images/poster.jpg`,
  ogUrl: `${siteUrl}/podcast/${episode.id}`,
  ogType: 'article',
  articlePublishedTime: episode.published.toISOString(),
  twitterCard: 'summary_large_image',
  twitterTitle: episode.title,
  twitterDescription: episode.description,
  twitterImage: `${siteUrl}/images/poster.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/podcast/${episode.id}` }
  ]
})
</script>
