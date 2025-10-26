<template>
  <svg aria-hidden="true" v-bind="$attrs">
    <defs>
      <pattern
        :id="id"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <path :d="`M.5 ${height}V.5H${width}`" fill="none" stroke="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width="0" :fill="`url(#${id})`" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: [Number, String],
    default: 40
  },
  height: {
    type: [Number, String],
    default: 40
  },
  x: {
    type: [Number, String],
    default: 0
  },
  y: {
    type: [Number, String],
    default: 0
  },
  squares: {
    type: Array,
    default: () => [[0, 0]]
  }
})

// Generate a unique ID for this pattern instance
const id = computed(() => `grid-pattern-${Math.random().toString(36).substr(2, 9)}`)
</script>
