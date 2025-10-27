<template>
  <footer class="border-t border-slate-200 bg-slate-50 py-10 sm:py-16">
    <Container>
      <div class="flex flex-col items-center gap-y-6 sm:flex-row sm:justify-between">
        <div class="flex gap-x-6 text-sm text-slate-600">
          <NuxtLink to="/" class="hover:text-slate-900 transition">
            Book
          </NuxtLink>
          <NuxtLink to="/podcast" class="hover:text-slate-900 transition">
            Podcast
          </NuxtLink>
          <NuxtLink to="/blog" class="hover:text-slate-900 transition">
            Blog
          </NuxtLink>
          <NuxtLink to="/authors" class="hover:text-slate-900 transition">
            Authors
          </NuxtLink>
        </div>
        <p class="text-sm text-slate-500">
          &copy; {{ new Date().getFullYear() }} FOSE. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
</template>

<script setup>
// Footer component
</script>
