<template>
  <div v-if="audioStore.hasEpisode" class="flex items-center gap-6 bg-white/90 px-4 py-4 shadow-lg shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
    <!-- Play/Pause Button -->
    <button
      type="button"
      @click="togglePlayPause"
      class="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14"
      :aria-label="audioStore.isPlaying ? 'Pause' : 'Play'"
    >
      <PlayIcon v-if="!audioStore.isPlaying" class="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7" />
      <PauseIcon v-else class="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7" />
    </button>

    <!-- Episode Info & Progress -->
    <div class="flex-auto">
      <div class="flex flex-wrap items-center justify-between gap-x-4">
        <h2 class="truncate text-sm font-bold leading-6 text-slate-900 md:text-base">
          {{ audioStore.currentEpisode.title }}
        </h2>
        <div class="flex items-center gap-4">
          <span class="text-sm font-mono leading-6 text-slate-500">
            {{ formatTime(audioStore.currentTime) }} / {{ formatTime(audioStore.duration) }}
          </span>
        </div>
      </div>

      <!-- Progress Bar -->
      <div
        class="mt-2 h-2 w-full cursor-pointer rounded-full bg-slate-100"
        @click="handleProgressClick"
        ref="progressBar"
      >
        <div
          class="h-full rounded-full bg-slate-700"
          :style="{ width: `${audioStore.progress}%` }"
        />
      </div>
    </div>

    <!-- Hidden Audio Element -->
    <audio ref="audioElement" class="hidden" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAudioStore } from '~/stores/audio'

const audioStore = useAudioStore()
const audioElement = ref(null)
const progressBar = ref(null)

onMounted(() => {
  if (audioElement.value) {
    audioStore.setAudioElement(audioElement.value)
  }
})

function togglePlayPause() {
  if (audioStore.isPlaying) {
    audioStore.pause()
  } else if (audioStore.currentEpisode) {
    audioStore.play(audioStore.currentEpisode)
  }
}

function handleProgressClick(event) {
  if (!progressBar.value) return

  const rect = progressBar.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percentage = (x / rect.width) * 100
  audioStore.seekToPercentage(percentage)
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'

  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
</script>
