<template>
  <svg aria-hidden="true" v-bind="$attrs" preserveAspectRatio="none">
    <defs>
      <!-- Fade gradient from top to bottom (white to black for mask) -->
      <linearGradient :id="`${componentId}-fade`" x1="0" x2="0" y1="0" y2="1">
        <stop offset="40%" stop-color="white" />
        <stop offset="100%" stop-color="black" />
      </linearGradient>

      <!-- Color gradient (blue → purple → pink) -->
      <linearGradient :id="`${componentId}-gradient`">
        <stop offset="0%" stop-color="#4989E8" />
        <stop offset="50%" stop-color="#6159DA" />
        <stop offset="100%" stop-color="#FF54AD" />
      </linearGradient>

      <!-- Mask using the pattern -->
      <mask :id="`${componentId}-mask`">
        <rect width="100%" height="100%" :fill="`url(#${componentId}-pattern)`" />
      </mask>

      <!-- Pattern with randomized bars -->
      <pattern
        :id="`${componentId}-pattern`"
        :width="bars.total * bars.width + bars.total * bars.gap"
        height="100%"
        patternUnits="userSpaceOnUse"
      >
        <rect
          v-for="(height, index) in barHeights"
          :key="index"
          :width="bars.width"
          :height="`${height}%`"
          :x="bars.gap * (index + 1) + bars.width * index"
          :fill="`url(#${componentId}-fade)`"
        />
      </pattern>
    </defs>

    <!-- Main rectangle with gradient and mask -->
    <rect
      width="100%"
      height="100%"
      :fill="`url(#${componentId}-gradient)`"
      :mask="`url(#${componentId}-mask)`"
      opacity="0.25"
    />
  </svg>
</template>

<script setup>
import { ref } from 'vue'

// Generate unique ID for this component instance
const componentId = ref(`waveform-${Math.random().toString(36).substr(2, 9)}`)

// Bar configuration
const bars = {
  total: 100,
  width: 2,
  gap: 2,
  minHeight: 40,
  maxHeight: 100,
}

// Random number generator with seed for consistency
function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

// Generate random heights for all bars
const barHeights = Array.from(
  { length: bars.total },
  randomBetween(bars.minHeight, bars.maxHeight)
)
</script>
