<template>
  <AudioProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AudioProvider>
</template>

<script setup>
// Initialize Web Vitals monitoring
onMounted(() => {
  useWebVitals()
})

useHead({
  link: [
    // Preconnect to font providers for faster font loading
    {
      rel: 'preconnect',
      href: 'https://cdn.fontshare.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preconnect',
      href: 'https://api.fontshare.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&f[]=satoshi@700,500,400&display=swap'
    }
  ]
})
</script>
