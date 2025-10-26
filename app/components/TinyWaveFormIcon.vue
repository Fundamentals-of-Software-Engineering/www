<template>
  <svg aria-hidden="true" v-bind="$attrs">
    <path :class="colors[0]" d="M0 1.75A.75.75 0 0 1 .75 1h.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V1.75z" />
    <path :class="colors[1]" d="M4 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-7z" />
    <path :class="colors[2]" d="M8 1.75A.75.75 0 0 1 8.75 1h.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V1.75z" />
  </svg>
</template>

<script setup>
defineProps({
  colors: {
    type: Array,
    default: () => ['fill-indigo-300', 'fill-blue-300', 'fill-indigo-300']
  }
})
</script>
