<template>
  <nav :class="['flex items-center gap-6', className]">
    <NuxtLink
      v-for="item in navigation"
      :key="item.name"
      :to="item.href"
      :class="[
        'text-sm/6 font-semibold transition-colors',
        isActive(item.href)
          ? 'text-blue-600'
          : 'text-slate-700 hover:text-slate-900'
      ]"
    >
      {{ item.name }}
    </NuxtLink>
    <div class="h-6 w-px bg-slate-300" aria-hidden="true"></div>
    <a
      href="https://github.com/Fundamentals-of-Software-Engineering"
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-700 hover:text-slate-900 transition-colors"
      aria-label="GitHub"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
      </svg>
    </a>
    <a
      href="https://www.youtube.com/@FundamentalsSWE"
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-700 hover:text-slate-900 transition-colors"
      aria-label="YouTube"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
    <a
      href="https://twitter.com/fundamentalsSWE"
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-700 hover:text-slate-900 transition-colors"
      aria-label="X (Twitter)"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    <a
      href="https://bsky.app/profile/nts.bsky.social"
      target="_blank"
      rel="noopener noreferrer"
      class="text-slate-700 hover:text-slate-900 transition-colors"
      aria-label="Bluesky"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
      </svg>
    </a>
  </nav>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})

const route = useRoute()

const navigation = [
  { name: 'Book', href: '/' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Blog', href: '/blog' },
  { name: 'Authors', href: '/authors' }
]

const isActive = (href) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}
</script>
