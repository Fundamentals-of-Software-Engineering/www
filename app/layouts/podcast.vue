<template>
  <div class="flex min-h-full flex-col">
    <!-- Top Navigation -->
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

    <div class="xl:flex min-h-full flex-1">
      <!-- Sidebar/Header -->
      <header class="bg-slate-50 xl:fixed xl:top-16 xl:bottom-0 xl:left-0 xl:flex xl:w-120 xl:items-start xl:overflow-y-auto">
      <!-- Hosted By (Vertical Text) -->
      <div class="hidden xl:sticky xl:top-4 xl:flex xl:w-16 xl:flex-none xl:items-center xl:px-12 xl:text-sm xl:whitespace-nowrap xl:[writing-mode:vertical-rl]">
        <span class="font-mono text-slate-500 leading-7">Hosted by</span>
        <span class="mt-6 flex gap-6 font-bold text-slate-900">
          <span>Dan Vega</span>
          <span aria-hidden="true" class="text-slate-400">/</span>
          <span>Nate Schutta</span>
        </span>
      </div>

      <div class="relative z-10 mx-auto px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 xl:min-h-full xl:flex-auto xl:border-x xl:border-slate-200 xl:px-12 xl:py-12">
        <!-- Podcast Cover -->
        <NuxtLink
          to="/podcast"
          class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl xl:w-auto xl:rounded-2xl"
          aria-label="Podcast homepage"
        >
          <NuxtImg
            class="w-full"
            src="/images/podcast_poster.png"
            alt="FOSE Podcast Cover"
            width="400"
            height="400"
            format="webp"
          />
          <div class="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset sm:rounded-xl xl:rounded-2xl" />
        </NuxtLink>

        <!-- Podcast Title -->
        <div class="mt-10 text-center xl:mt-12 xl:text-left">
          <p class="text-xl font-bold text-slate-900">
            <NuxtLink to="/podcast">FOSE Podcast</NuxtLink>
          </p>
          <p class="mt-3 text-lg font-medium text-slate-700 leading-8">
            This Podcast will teach you the fundamentals beyond coding, from maintainability to architecture to career growth.
          </p>
        </div>

        <!-- Listen Section -->
        <section class="mt-10 xl:mt-12">
          <h2 class="flex items-center font-mono text-sm font-medium text-slate-900 leading-7">
            <TinyWaveFormIcon
              :colors="['fill-indigo-300', 'fill-blue-300']"
              class="h-2.5 w-2.5"
            />
            <span class="ml-2.5">Listen</span>
          </h2>
          <div class="mt-4 flex flex-col gap-4">
            <a href="#" class="group flex items-center text-base font-medium text-slate-700 leading-7 hover:text-slate-900">
              <svg class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" viewBox="0 0 32 32">
                <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
              </svg>
              <span class="ml-3">Spotify</span>
            </a>
            <a href="#" class="group flex items-center text-base font-medium text-slate-700 leading-7 hover:text-slate-900">
              <svg class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" viewBox="0 0 32 32">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z" />
              </svg>
              <span class="ml-3">Apple Podcast</span>
            </a>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer" class="group flex items-center text-base font-medium text-slate-700 leading-7 hover:text-slate-900">
              <svg class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" viewBox="0 0 32 32">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z" />
              </svg>
              <span class="ml-3">RSS Feed</span>
            </a>
          </div>
        </section>

        <!-- Watch Section -->
        <section class="mt-10 xl:mt-12">
          <h2 class="flex items-center font-mono text-sm font-medium text-slate-900 leading-7">
            <svg class="h-2.5 w-2.5 fill-red-500" viewBox="0 0 24 24">
              <path d="M10 8v8l5-4-5-4z" />
            </svg>
            <span class="ml-2.5">Watch</span>
          </h2>
          <div class="mt-4 flex flex-col gap-4">
            <a href="https://www.youtube.com/@FundamentalsSWE" target="_blank" rel="noopener noreferrer" class="group flex items-center text-base font-medium text-slate-700 leading-7 hover:text-slate-900">
              <svg class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" viewBox="0 0 32 32">
                <path d="M31.331 8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673s-10.006 0-12.502.673c-1.377.37-2.461 1.462-2.829 2.848C0 10.758 0 16 0 16s0 5.242.669 7.752c.368 1.386 1.452 2.477 2.829 2.848 2.496.673 12.502.673 12.502.673s10.006 0 12.502-.673c1.377-.37 2.461-1.462 2.829-2.848C32 21.242 32 16 32 16s0-5.242-.669-7.752zM12.727 20.758V11.242L21.091 16l-8.364 4.758z"/>
              </svg>
              <span class="ml-3">YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </header>

    <!-- Waveform Background (Full Width) -->
    <Waveform class="absolute top-16 left-0 h-20 w-full" />

    <!-- Main Content -->
    <main class="border-t border-slate-200 xl:relative xl:mb-28 xl:ml-120 xl:border-t-0 w-full">
      <div class="relative">
        <slot />
      </div>
    </main>

    <!-- Fixed Audio Player -->
    <div class="fixed inset-x-0 bottom-0 z-10 xl:left-120">
      <AudioPlayer />
    </div>

    <!-- Mobile Footer -->
    <footer class="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 xl:hidden">
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <h2 class="mt-8 flex items-center font-mono text-sm font-medium text-slate-900 leading-7">
          <svg class="h-3 w-auto fill-slate-300" viewBox="0 0 11 12">
            <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
          </svg>
          <span class="ml-2.5">Hosted by</span>
        </h2>
        <div class="mt-2 flex gap-6 text-sm font-bold text-slate-900 leading-7">
          <span>Dan Vega</span>
          <span aria-hidden="true" class="text-slate-400">/</span>
          <span>Nate Schutta</span>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>

<script setup>
// Podcast layout with audio player and enhanced sidebar
</script>
