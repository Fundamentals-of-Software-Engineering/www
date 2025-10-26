<template>
  <h2 :id="id" class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
    <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
      <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-violet-300" />
      <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-pink-300" />
    </svg>
    <span class="ml-2.5">{{ title }}</span>
  </h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: ''
  }
})
</script>
