<template>
  <div class="flex min-h-full flex-col">
    <header class="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row h-auto sm:h-16 py-4 sm:py-0 items-center justify-center sm:justify-between gap-4 sm:gap-0">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-slate-900">
              <NuxtImg src="/images/fundamentals_of_software_engineering_logo.png" alt="logo" class="h-10" />
            </NuxtLink>
          </div>
          <MainNavigation />
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup>
// No setup needed for this simple layout
</script>
