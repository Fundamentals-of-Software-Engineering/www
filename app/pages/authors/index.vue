<template>
  <div>
    <section class="relative scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-16 lg:pt-24">
      <Container>
        <div class="mx-auto max-w-7xl">
          <div class="text-center">
            <h1 class="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Meet the Authors
            </h1>
            <p class="mt-6 text-lg tracking-tight text-slate-700 max-w-3xl mx-auto">
              Written by engineers, for engineers. Nathaniel Schutta and Dan Vega have decades of combined experience in software engineering.
            </p>
          </div>

          <!-- Authors Grid -->
          <div class="mt-16 space-y-20">
            <!-- Author Card -->
            <div
              v-for="author in authors"
              :key="author.slug"
              class="relative mx-auto max-w-5xl sm:px-6"
            >
              <div class="bg-slate-50 pt-px sm:rounded-6xl">
                <div class="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                  <NuxtImg
                    :src="author.image"
                    :alt="author.name"
                    class="absolute inset-0 h-full w-full object-cover"
                    width="500"
                    height="500"
                    format="webp"
                  />
                </div>
                <div class="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                  <p class="mt-8 font-display text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">
                    {{ author.name }}
                  </p>
                  <p class="mt-4 text-lg tracking-tight text-slate-700">
                    {{ author.bio }}
                  </p>

                  <!-- Social Links -->
                  <ul class="mt-6 space-y-2">
                    <li v-if="author.twitter">
                      <a
                        :href="author.twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Follow ${author.name} on X/Twitter`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                        </svg>
                        <span class="ml-2">Follow on X</span>
                      </a>
                    </li>

                    <li v-if="author.bluesky">
                      <a
                        :href="author.bluesky"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Follow ${author.name} on Bluesky`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                        </svg>
                        <span class="ml-2">Follow on Bluesky</span>
                      </a>
                    </li>

                    <li v-if="author.linkedin">
                      <a
                        :href="author.linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Connect with ${author.name} on LinkedIn`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span class="ml-2">Connect on LinkedIn</span>
                      </a>
                    </li>

                    <li v-if="author.github">
                      <a
                        :href="author.github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Follow ${author.name} on GitHub`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span class="ml-2">Follow on GitHub</span>
                      </a>
                    </li>

                    <li v-if="author.youtube">
                      <a
                        :href="author.youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Subscribe to ${author.name} on YouTube`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span class="ml-2">Subscribe on YouTube</span>
                      </a>
                    </li>

                    <li v-if="author.website">
                      <a
                        :href="author.website"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        :aria-label="`Visit ${author.name}'s website`"
                      >
                        <svg class="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.5 12c0 1.676-.437 3.247-1.197 4.62-.062-.313-.106-.636-.157-.962-.165-1.044-.333-2.123-.789-3.077-.524-1.095-1.383-1.907-2.455-2.436.14-.427.27-.863.375-1.308.227-.965.333-1.956.333-2.96 0-.364-.014-.726-.042-1.086C19.96 6.4 21.5 9.01 21.5 12zM12 2.5c.364 0 .726.014 1.086.042-1.608 2.392-1.875 5.17-2.042 7.877-.042.693-.083 1.386-.157 2.076-.125 1.164-.291 2.323-.583 3.464-.291 1.137-.707 2.248-1.333 3.278-.062.104-.125.208-.187.313C5.854 17.785 3.5 15.193 3.5 12 3.5 6.753 7.753 2.5 12 2.5zm.042 19c-2.707 0-5.167-1.127-6.917-2.936.062-.104.125-.208.187-.313.626-1.03 1.042-2.141 1.333-3.278.292-1.14.458-2.3.583-3.464.074-.69.115-1.383.157-2.076.167-2.707.434-5.485 2.042-7.877.364-.028.726-.042 1.086-.042 5.247 0 9.5 4.253 9.5 9.5 0 3.193-1.584 6.015-4 7.738-.062.326-.106.649-.157.962-.165 1.044-.333 2.123-.789 3.077-.524 1.095-1.383 1.907-2.455 2.436-.187.063-.364.125-.552.177-.332.052-.662.096-1.018.096z"/>
                        </svg>
                        <span class="ml-2">Visit website</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { getAllAuthors } from '~/data/authors'

const authors = getAllAuthors()
const siteUrl = 'https://fundamentalsofswe.com'

useSeoMeta({
  title: 'Authors - Fundamentals of Software Engineering',
  description: 'Meet the authors of Fundamentals of Software Engineering: Nathaniel Schutta and Dan Vega, experienced software engineers and educators with decades of combined experience.',
  ogTitle: 'Authors - Fundamentals of Software Engineering',
  ogDescription: 'Meet Nathaniel Schutta and Dan Vega, the authors behind Fundamentals of Software Engineering. Learn from their decades of experience in software engineering.',
  ogImage: `${siteUrl}/images/fose_cover_final.jpg`,
  ogUrl: `${siteUrl}/authors`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Authors - Fundamentals of Software Engineering',
  twitterDescription: 'Meet Nathaniel Schutta and Dan Vega, experienced software engineers and educators.',
  twitterImage: `${siteUrl}/images/fose_cover_final.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/authors` }
  ]
})
</script>
