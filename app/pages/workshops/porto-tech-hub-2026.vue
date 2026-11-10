<script setup>
// Keynote metadata for SEO and date formatting
const workshop = {
  slug: 'porto-tech-hub-2026',
  title: 'Fundamentals of Software Engineering in the Age of AI',
  tagline: "The fundamentals didn't change. The ratio did.",
  format: 'Keynote',
  speakers: 'Nathaniel Schutta and Dan Vega',
  date: new Date('2026-11-10T12:00:00Z'),
  location: 'Porto Tech Hub Conference 2026',
  venue: 'Alfândega do Porto',
  address: 'Rua Nova da Alfândega, 4050-430 Porto, Portugal',
  description: 'Our keynote at Porto Tech Hub Conference 2026. AI made writing code cheap. Owning code is still expensive, and the fundamentals are how you own it.',
  eventUrl: 'https://portotechhub.com/conference-2026/',
  slidesUrl: '/workshops/porto-tech-hub-2026/slides.pdf'
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: `${workshop.title} - Keynote - Fundamentals of Software Engineering`,
  description: workshop.description,
  ogTitle: workshop.title,
  ogDescription: workshop.description,
  ogImage: 'https://fundamentalsofswe.com/images/book-cover.png',
  ogUrl: `https://fundamentalsofswe.com/workshops/${workshop.slug}`,
  twitterCard: 'summary_large_image',
  twitterTitle: workshop.title,
  twitterDescription: workshop.description,
  twitterImage: 'https://fundamentalsofswe.com/images/book-cover.png'
})

useHead({
  link: [
    { rel: 'canonical', href: `https://fundamentalsofswe.com/workshops/${workshop.slug}` }
  ]
})

const keyIdeas = [
  'The fundamentals didn\'t change. The ratio did. Writing code is now cheap. Owning code is still expensive.',
  'We have leveraged new abstractions before, from punch cards to high-level languages. Every one of them gave us more software, not less.',
  'Writing code was always the smallest part of the job. The role expanded. It did not disappear.',
  'When writing code gets cheap, the bottleneck moves to deciding, specifying, reviewing, and running.',
  'Scope, stakes, and scale decide how much scrutiny code needs. Same tools, different stakes.',
  'You can\'t review what you can\'t read. The skill AI erodes first is debugging.',
  'The reps rule: write it once yourself, then hand it off. Know one level of abstraction below the one you use.',
  'Done means it has a test, the tests pass, you saw it work, and you said what you checked and what you didn\'t.',
  'You are responsible for your career. No one can do it for you, and you can\'t stop learning.'
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="scroll-mt-14 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
      <Container>
        <div class="max-w-4xl">
          <!-- Event Badge -->
          <div class="flex flex-wrap items-center gap-3">
            <div class="inline-flex items-center rounded-full bg-fish-blue-600 px-4 py-2 text-sm font-semibold text-white">
              {{ workshop.location }}
            </div>
            <div class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
              {{ workshop.format }}
            </div>
          </div>

          <!-- Title -->
          <h1 class="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {{ workshop.title }}
          </h1>

          <p class="mt-4 text-xl leading-8 text-slate-600 sm:text-2xl">
            {{ workshop.tagline }}
          </p>

          <!-- Date, Speakers, and Location -->
          <div class="mt-8 flex flex-wrap gap-6 text-base text-slate-700">
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time :datetime="workshop.date.toISOString()" class="font-semibold">
                {{ formatDate(workshop.date) }}
              </time>
            </div>

            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{{ workshop.speakers }}</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ workshop.venue }}</span>
            </div>
          </div>

          <div class="mt-2 ml-7 text-sm text-slate-600">
            {{ workshop.address }}
          </div>

          <!-- CTA Button -->
          <div class="mt-8">
            <Button
              :href="workshop.slidesUrl"
              color="blue"
              class="text-lg"
            >
              Download the Slides (PDF)
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Abstract -->
    <section class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            About This Keynote
          </h2>
          <div class="prose prose-slate mt-6 text-base leading-7 text-slate-700">
            <p>Do the fundamentals still matter? We have the tools now. They plan. They write. They test. They ship. So do we still need to understand the code? Do we even need to read it?</p>
            <p>We have been here before. Punch cards gave way to assembly, then to high-level languages, then to frameworks and the cloud. Every new abstraction made building software easier, and every one of them gave us more software, not less. The house is still a house. The carpenter is still a carpenter.</p>
            <p>Writing code was never the whole job. It was always the smallest part. Requirements, design, testing, review, deployment, security, and communication were always there too. When writing code gets cheap, the bottleneck moves to deciding what to build, specifying it, reviewing it, and running it.</p>
            <p>That is where the fundamentals come back in. You can't review what you can't read. The skill AI erodes first is debugging. So you still need to learn this. Write it once yourself, then hand it off. Know one level of abstraction below the one you use. Let tests, not diagrams or specs, be the gate.</p>
            <p>Writing code is now cheap. Owning code is still expensive. Owning code is the craft, and the craft isn't going away.</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Key Ideas -->
    <section class="scroll-mt-14 border-t border-slate-100 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Key Ideas
          </h2>
          <ul class="mt-8 space-y-4">
            <li v-for="idea in keyIdeas" :key="idea" class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">{{ idea }}</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Resources -->
    <section class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Resources
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-700">
            The slides from the keynote, plus a few places to keep going:
          </p>

          <div class="mt-8 space-y-4">
            <a
              :href="workshop.slidesUrl"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Keynote Slides (PDF)</h3>
                <p class="mt-1 text-sm text-slate-600">189 slides, 28 MB</p>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://www.oreilly.com/library/view/fundamentals-of-software/9781098145279/"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Fundamentals of Software Engineering Book</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://github.com/Fundamentals-of-Software-Engineering"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Fundamentals of Software Engineering GitHub Organization</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              :href="workshop.eventUrl"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Porto Tech Hub Conference 2026</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="scroll-mt-14 border-t border-slate-100 bg-gradient-to-r from-fish-blue-700 via-fish-blue-600 to-fish-gold-500 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl text-center">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Want to Go Deeper?
          </h2>
          <p class="mt-6 text-lg leading-8 text-fish-blue-100">
            The keynote is the short version. The book covers the fundamentals in depth, and our full-day workshop puts them into practice.
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="https://www.oreilly.com/library/view/fundamentals-of-software/9781098145279/"
              color="white"
              class="text-lg"
            >
              Get the Book
            </Button>
            <NuxtLink to="/workshops" class="text-base font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white">
              See our workshops
            </NuxtLink>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
