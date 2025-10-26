<template>
  <section
    id="author"
    aria-labelledby="author-title"
    class="scroll-mt-14 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
  >
    <Container>
      <div class="mx-auto max-w-7xl">
        <SectionHeading id="author-title" title="Authors" class="text-center" />
        <p class="mt-8 text-center font-display text-4xl font-bold tracking-tight text-slate-900">
          Written by engineers, for engineers.
        </p>
        <p class="mx-auto mt-4 max-w-3xl text-center text-lg tracking-tight text-slate-700">
          Nathaniel Schutta and Dan Vega have decades of combined experience in software engineering, from building products at startups to leading engineering teams at major tech companies.
        </p>

        <div class="mt-12 text-center">
          <NuxtLink
            to="/authors"
            class="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Learn more about the authors
            <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
// No setup needed for this component
</script>
