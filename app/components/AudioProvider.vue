<template>
  <div>
    <slot />
    <audio
      ref="audioElement"
      @play="handlePlay"
      @pause="handlePause"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleEnded"
      :muted="audioStore.muted"
      class="hidden"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAudioStore } from '~/stores/audio'

const audioStore = useAudioStore()
const audioElement = ref(null)

onMounted(() => {
  if (audioElement.value) {
    audioStore.setAudioElement(audioElement.value)
  }
})

onUnmounted(() => {
  // Clean up audio element reference when component is destroyed
  if (audioElement.value) {
    audioElement.value.pause()
    audioElement.value.src = ''
  }
})

function handlePlay() {
  audioStore.isPlaying = true
}

function handlePause() {
  audioStore.isPlaying = false
}

function handleTimeUpdate(event) {
  audioStore.currentTime = Math.floor(event.target.currentTime)
}

function handleLoadedMetadata(event) {
  audioStore.duration = Math.floor(event.target.duration)
}

function handleEnded() {
  audioStore.isPlaying = false
}
</script>
