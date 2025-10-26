import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAudioStore = defineStore('audio', () => {
  // State
  const currentEpisode = ref(null)
  const audioElement = ref(null)
  const isPlaying = ref(false)
  const currentTime = ref(0)
  const duration = ref(0)
  const muted = ref(false)

  // Getters
  const hasEpisode = computed(() => currentEpisode.value !== null)
  const progress = computed(() => {
    if (duration.value === 0) return 0
    return (currentTime.value / duration.value) * 100
  })

  // Actions
  function setAudioElement(element) {
    if (!element) {
      return
    }

    audioElement.value = element
  }

  function play(episode) {
    if (!audioElement.value || !episode?.audioUrl) {
      return
    }

    // If same episode, just resume playback
    if (currentEpisode.value?.id === episode.id) {
      audioElement.value.play().catch(() => {
        // Silently handle autoplay restrictions
      })
      return
    }

    // New episode
    currentEpisode.value = episode
    audioElement.value.src = episode.audioUrl
    audioElement.value.load()
    audioElement.value.play().catch(() => {
      // Silently handle autoplay restrictions
    })
  }

  function pause() {
    if (audioElement.value) {
      audioElement.value.pause()
    }
  }

  function toggle(episode) {
    if (currentEpisode.value?.id === episode.id && isPlaying.value) {
      pause()
    } else {
      play(episode)
    }
  }

  function seek(time) {
    if (audioElement.value) {
      audioElement.value.currentTime = time
      currentTime.value = time
    }
  }

  function seekToPercentage(percentage) {
    if (audioElement.value && duration.value) {
      const time = (percentage / 100) * duration.value
      seek(time)
    }
  }

  function toggleMute() {
    muted.value = !muted.value
  }

  return {
    // State
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    muted,

    // Getters
    hasEpisode,
    progress,

    // Actions
    setAudioElement,
    play,
    pause,
    toggle,
    seek,
    seekToPercentage,
    toggleMute
  }
})
