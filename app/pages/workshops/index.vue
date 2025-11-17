<script setup>
const workshops = [
  {
    id: 1,
    slug: 'qcon-sf-2025',
    title: 'Fundamentals of Software Engineering in the Age of AI',
    date: new Date('2025-11-20T13:00:00-08:00'),
    time: '1:00 PM PST',
    duration: '3 hours',
    location: 'QCon San Francisco 2025',
    venue: 'Seacliff CD, Hyatt Regency San Francisco',
    description: 'This intensive workshop bridges fundamental programming skills with expertise needed to work alongside AI tools through a balanced mix of conceptual teaching and hands-on exercises.',
    status: 'upcoming'
  }
]

useSeoMeta({
  title: 'Workshops - Fundamentals of Software Engineering',
  description: 'Join our hands-on workshops exploring software engineering fundamentals and modern development practices. Learn from industry experts Nathaniel Schutta and Dan Vega.',
  ogTitle: 'Workshops - Fundamentals of Software Engineering',
  ogDescription: 'Join our hands-on workshops exploring software engineering fundamentals and modern development practices.',
  ogImage: 'https://fundamentalsofswe.com/images/book-cover.png',
  ogUrl: 'https://fundamentalsofswe.com/workshops',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Workshops - Fundamentals of Software Engineering',
  twitterDescription: 'Join our hands-on workshops exploring software engineering fundamentals and modern development practices.',
  twitterImage: 'https://fundamentalsofswe.com/images/book-cover.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://fundamentalsofswe.com/workshops' }
  ]
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const upcomingWorkshops = workshops.filter(w => w.status === 'upcoming')
const pastWorkshops = workshops.filter(w => w.status === 'past')
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
      <Container>
        <div class="max-w-3xl">
          <h1 class="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Workshops
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-700">
            Join us for hands-on workshops where we dive deep into software engineering fundamentals and explore how modern tools and AI are transforming the way we build software.
          </p>
        </div>
      </Container>
    </section>

    <!-- Upcoming Workshops -->
    <section v-if="upcomingWorkshops.length > 0" class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
          Upcoming Workshops
        </h2>

        <div class="mt-8 divide-y divide-slate-100">
          <NuxtLink
            v-for="workshop in upcomingWorkshops"
            :key="workshop.id"
            :to="`/workshops/${workshop.slug}`"
            class="group block py-8 first:pt-0 transition-colors hover:bg-slate-50"
          >
            <article class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <!-- Left side: Date and time info -->
              <div class="flex-shrink-0 sm:w-48">
                <time :datetime="workshop.date.toISOString()" class="font-mono text-sm text-slate-500">
                  {{ formatDate(workshop.date) }}
                </time>
                <div v-if="workshop.time" class="mt-1 flex items-center gap-2 text-sm text-slate-600">
                  <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ workshop.time }}</span>
                  <span v-if="workshop.duration" class="text-slate-400">•</span>
                  <span v-if="workshop.duration">{{ workshop.duration }}</span>
                </div>
              </div>

              <!-- Right side: Content -->
              <div class="flex-1">
                <div class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {{ workshop.location }}
                </div>

                <h3 class="mt-3 text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {{ workshop.title }}
                </h3>

                <p class="mt-3 text-base leading-7 text-slate-700 line-clamp-2">
                  {{ workshop.description }}
                </p>

                <div class="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{{ workshop.venue }}</span>
                </div>

                <div class="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more & Register</span>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>
      </Container>
    </section>

    <!-- Past Workshops -->
    <section v-if="pastWorkshops.length > 0" class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
          Past Workshops
        </h2>

        <div class="mt-8 divide-y divide-slate-100">
          <NuxtLink
            v-for="workshop in pastWorkshops"
            :key="workshop.id"
            :to="`/workshops/${workshop.slug}`"
            class="group block py-8 first:pt-0 transition-colors hover:bg-slate-50"
          >
            <article class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div class="flex-shrink-0 sm:w-48">
                <time :datetime="workshop.date.toISOString()" class="font-mono text-sm text-slate-500">
                  {{ formatDate(workshop.date) }}
                </time>
              </div>

              <div class="flex-1">
                <div class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {{ workshop.location }}
                </div>

                <h3 class="mt-3 text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {{ workshop.title }}
                </h3>

                <p class="mt-3 text-base leading-7 text-slate-700 line-clamp-2">
                  {{ workshop.description }}
                </p>

                <div class="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  <span>View details</span>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>
      </Container>
    </section>

    <!-- Empty State -->
    <section v-if="workshops.length === 0" class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="text-center">
          <p class="text-lg text-slate-700">
            No workshops scheduled at this time. Check back soon!
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>
