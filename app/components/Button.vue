<template>
  <component
    :is="componentType"
    :to="isNuxtLink ? to : undefined"
    :href="isAnchor ? to : href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import clsx from 'clsx'

const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline'].includes(value)
  },
  color: {
    type: String,
    default: 'slate',
    validator: (value) => ['slate', 'blue', 'white'].includes(value)
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
})

const baseStyles = {
  solid: 'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm',
  outline: 'inline-flex justify-center rounded-md border py-[calc(0.25rem-1px)] px-[calc(1rem-1px)] text-base font-semibold tracking-tight'
}

const variantStyles = {
  solid: {
    slate: 'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    white: 'bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600'
  },
  outline: {
    slate: 'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent'
  }
}

const isAnchor = computed(() => props.to && props.to.startsWith('#'))
const isNuxtLink = computed(() => props.to && !isAnchor.value)
const componentType = computed(() => {
  if (isAnchor.value || props.href) return 'a'
  if (isNuxtLink.value) return 'NuxtLink'
  return 'button'
})

const buttonClasses = computed(() => {
  return clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : variantStyles.solid[props.color]
  )
})
</script>
