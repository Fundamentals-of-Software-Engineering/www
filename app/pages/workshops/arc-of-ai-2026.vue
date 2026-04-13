<script setup>
// Workshop metadata for SEO and date formatting
const workshop = {
  slug: 'arc-of-ai-2026',
  title: 'Fundamentals of Software Engineering in the Age of AI',
  date: new Date('2026-04-13T09:00:00-05:00'),
  time: '9:00 AM CDT',
  duration: '8 hours',
  location: 'Arc of AI 2026',
  venue: 'Austin Marriott North, Round Rock',
  address: '2600 La Frontera Blvd, Round Rock, TX 78681',
  description: 'This intensive workshop bridges fundamental programming skills with expertise needed to work alongside AI tools through a balanced mix of conceptual teaching and hands-on exercises.',
  registrationUrl: 'https://www.arcofai.com/register'
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: `${workshop.title} - Workshops - Fundamentals of Software Engineering`,
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
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="scroll-mt-14 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
      <Container>
        <div class="max-w-4xl">
          <!-- Event Badge -->
          <div class="inline-flex items-center rounded-full bg-fish-blue-600 px-4 py-2 text-sm font-semibold text-white">
            {{ workshop.location }}
          </div>

          <!-- Title -->
          <h1 class="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {{ workshop.title }}
          </h1>

          <!-- Date, Time, and Location -->
          <div class="mt-8 flex flex-wrap gap-6 text-base text-slate-700">
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time :datetime="workshop.date.toISOString()" class="font-semibold">
                {{ formatDate(workshop.date) }}
              </time>
              <span class="text-slate-400">&bull;</span>
              <span>{{ workshop.time }}</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ workshop.duration }}</span>
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
              :href="workshop.registrationUrl"
              color="blue"
              class="text-lg"
            >
              Register for Workshop
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
            About This Workshop
          </h2>
          <div class="prose prose-slate mt-6 text-base leading-7 text-slate-700">
            <p>This intensive workshop bridges fundamental programming skills with the expertise needed to work alongside AI tools. Participants engage in a balanced mix of conceptual teaching and hands-on exercises combining traditional and AI-assisted approaches to reinforce practical software engineering principles.</p>
            <p>Learn to transition from programmer to software engineer, create maintainable code, and master AI code assistance while critically evaluating outputs. Through hands-on labs, you'll gain practical experience with modern development workflows and build a professional growth roadmap in the AI era.</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Key Takeaways -->
    <section class="scroll-mt-14 border-t border-slate-100 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            What You'll Learn
          </h2>
          <ul class="mt-8 space-y-4">
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Transition from programmer to software engineer mindset</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Create maintainable, readable code communicating clear intent</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Apply effective legacy codebase management techniques</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Master AI code assistance while critically evaluating outputs</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Apply architecture patterns appropriately</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Build professional growth roadmap in the AI era</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Prerequisites -->
    <section class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Prerequisites
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-700">
            To get the most out of this workshop, please ensure you have:
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Working knowledge of at least one programming language</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Basic understanding of software development concepts</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Laptop with code editor and Git installed</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Optional: Access to an AI coding assistant (Claude Code, GitHub Copilot, ChatGPT, or similar)</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Optional: A Google account to use <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" class="text-fish-blue-600 underline hover:no-underline">NotebookLM</a></p>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Labs -->
    <section class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-4xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Labs
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-700">
            This workshop is structured as a series of focused, hands-on labs, each exploring a different aspect of modern software engineering.
          </p>

          <div class="mt-12 space-y-8">
            <!-- Lab 1: Reading Code -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Reading Code & Exploring Unfamiliar Codebases
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-fish-blue-100 px-3 py-1 text-sm font-semibold text-fish-blue-700">
                    15 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  You'll explore the Spring PetClinic application, a real world codebase that may be in a language you've never used before. This is intentional! The goal is to practice reading and understanding unfamiliar code, one of the most important skills in software engineering.
                </p>

                <!-- Repository Link -->
                <div class="mt-6 rounded-lg border border-fish-blue-200 bg-fish-blue-50 p-4">
                  <div class="flex items-start gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-fish-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <div class="flex-1">
                      <h4 class="text-sm font-semibold text-fish-blue-900">Repository</h4>
                      <a href="https://github.com/spring-projects/spring-petclinic" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-fish-blue-700 hover:text-fish-blue-800 hover:underline break-all">
                        https://github.com/spring-projects/spring-petclinic
                      </a>
                      <p class="mt-2 text-sm text-fish-blue-900">
                        <strong>Clone the repository:</strong>
                      </p>
                      <code class="mt-1 block rounded bg-white px-3 py-2 text-xs text-slate-800 border border-fish-blue-200">
                        git clone https://github.com/spring-projects/spring-petclinic
                      </code>
                    </div>
                  </div>
                </div>

                <!-- Important Note -->
                <div class="mt-8 rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
                  <div class="flex gap-3">
                    <svg class="h-6 w-6 flex-shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p class="text-sm font-semibold text-amber-900">Important: No AI Tools for This Exercise</p>
                      <p class="mt-1 text-sm leading-6 text-amber-800">
                        Please do not use AI assistants (ChatGPT, GitHub Copilot, etc.) for this exercise. We want to build the muscle of reading and navigating code on our own first. Once you have that foundation, AI tools become much more effective.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Exercises -->
                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Initial Orientation</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Without running the app, what technologies and frameworks can you identify from the project files (pom.xml, package structure)?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Locate the main application class. What annotations do you see?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Based on folder structure alone, what architectural pattern does this app follow?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Code Navigation</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Pick one entity (like "Owner" or "Pet") and trace it through the codebase. Find its model, repository, service, and controller.</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Without looking at documentation, can you sketch the database schema based on the entity classes?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Where and how is the database configured?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Pattern Recognition</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Find examples of design patterns being used (Repository, MVC, dependency injection)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What naming conventions do you notice for classes, methods, and packages?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Given a URL like /owners/{ownerId}/pets/new, trace what happens when someone submits the form</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Reflection</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What made this codebase easier or harder to understand?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What strategies did you use to navigate the code?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">How long did it take to understand the basic flow?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What could you apply to your own projects?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <!-- Lab 2: Writing Code -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Writing Clean Code: Identifying & Fixing Code Smells
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-fish-blue-100 px-3 py-1 text-sm font-semibold text-fish-blue-700">
                    25 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  You'll review a small Java codebase that's been seeded with intentional code smells across six clean code categories. Your job is to find the problems, fix a few of them, and talk through the trade-offs with your peers.
                </p>

                <!-- Repository Link -->
                <div class="mt-6 rounded-lg border border-fish-blue-200 bg-fish-blue-50 p-4">
                  <div class="flex items-start gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-fish-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <div class="flex-1">
                      <h4 class="text-sm font-semibold text-fish-blue-900">Repository</h4>
                      <a href="https://github.com/Fundamentals-of-Software-Engineering/workshop/tree/main/writing-code-lab" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-fish-blue-700 hover:text-fish-blue-800 hover:underline break-all">
                        https://github.com/Fundamentals-of-Software-Engineering/workshop/tree/main/writing-code-lab
                      </a>
                      <p class="mt-2 text-sm text-fish-blue-900">
                        <strong>Clone the repository:</strong>
                      </p>
                      <code class="mt-1 block rounded bg-white px-3 py-2 text-xs text-slate-800 border border-fish-blue-200">
                        git clone https://github.com/Fundamentals-of-Software-Engineering/workshop.git
                      </code>
                    </div>
                  </div>
                </div>

                <!-- Code Smell Categories -->
                <div class="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h4 class="text-sm font-semibold text-slate-900">Six Clean Code Categories to Look For</h4>
                  <div class="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">1</span>
                      Meaningful names that reveal intent
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">2</span>
                      Single responsibility principle
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">3</span>
                      DRY (Don't Repeat Yourself)
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">4</span>
                      Explanatory vs. restating comments
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">5</span>
                      Formatting that matches control flow
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-700">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fish-blue-100 text-xs font-bold text-fish-blue-700">6</span>
                      Composition over inappropriate inheritance
                    </div>
                  </div>
                </div>

                <!-- Exercises -->
                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 1: Identify Code Smells (5 minutes)</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Open the <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">src/</code> folder and review all five Java files: <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Animal.java</code>, <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Dog.java</code>, <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Fish.java</code>, <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">WeightTracker.java</code>, and <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">WeightTrackerUtils.java</code></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">For each file, identify as many code smells as you can from the six categories above</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Pay special attention to the class hierarchy: Does it make sense for <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Fish</code> to extend <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Animal</code> which assumes all animals have fur?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Check the loop in <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">WeightTracker</code> carefully. Does the summation actually work correctly?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">In <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs">WeightTrackerUtils</code>, do the method names and documentation match what the code actually does?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 2: Refactor (8 minutes)</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Pick 2-3 code smells you identified and refactor them</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Rename methods and variables to clearly communicate their intent</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Break apart methods that have multiple responsibilities</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Fix the class hierarchy to use composition instead of inappropriate inheritance</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Update comments to explain <em>why</em>, not <em>what</em></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 3: Discuss (3 minutes)</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Compare your findings with a neighbor. Did they spot smells you missed?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Talk through different refactoring approaches. There's often more than one valid solution.</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Which code smells were easiest to spot? Which were most subtle?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 4: AI Tools & Code Quality Discussion (10 minutes)</h4>
                    <p class="mt-2 text-sm leading-6 text-slate-700">
                      Now that you've identified and fixed code smells by hand, let's talk about how AI coding tools fit into this workflow. The goal isn't to avoid these tools. It's to use them intentionally.
                    </p>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Could an AI assistant have caught the code smells you found? Which ones would it likely miss?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">When AI generates code, how do you evaluate whether it introduced new smells or anti-patterns?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What's the difference between using AI to <em>find</em> problems vs. using AI to <em>fix</em> them? When is each approach appropriate?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">How do you build the judgment to know when AI suggested code is good enough and when you need to push back?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What fundamentals (like the six categories we practiced) do you need to understand <em>before</em> you can effectively use AI tools?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">AI tools amplify your skills. They don't replace the need to understand clean code principles.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Solution Note -->
                <div class="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div class="flex gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-sm leading-6 text-slate-700">
                      <strong>After the exercise:</strong> A solution branch is available in the repository for comparison. Try to complete the exercise before checking the solution!
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- Lab 3: Technology Radar -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Building a Personal Technology Radar
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-fish-blue-100 px-3 py-1 text-sm font-semibold text-fish-blue-700">
                    10 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  Create your own technology radar to track and categorize the technologies, tools, and frameworks that matter to you. You'll organize your technical landscape into rings and use it as a guide for your learning journey and career growth.
                </p>

                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">The Four Rings</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Adopt:</strong> Technologies you're currently using and mastering, your core competencies</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Trial:</strong> Technologies you're actively learning or experimenting with</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Assess:</strong> Technologies you're researching but haven't started learning yet</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Hold:</strong> Technologies you've decided not to pursue right now</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Exploring Thoughtworks Tech Radar</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Visit the official Thoughtworks Technology Radar: <a href="https://www.thoughtworks.com/radar" class="text-fish-blue-600 underline hover:no-underline">https://www.thoughtworks.com/radar</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Notice how technologies move between rings over time as they mature or decline</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Pay attention to technologies in your domain or areas of interest</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What patterns do you notice? What technologies appear in "Adopt" vs "Hold"?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Build Your Own Radar</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">There are no wrong answers here! This is YOUR personal technology radar. It should reflect your unique interests, goals, and current skill level.</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">List 5-10 technologies you know or want to learn. You can use a spreadsheet, paper, or any format that works for you</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">For each technology, capture the name, ring (Adopt/Trial/Assess/Hold), quadrant, and a brief description</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">For example, React (Adopt, Languages & Frameworks), Docker (Trial, Tools), Rust (Assess, Languages & Frameworks)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">You can optionally use the Thoughtworks Build Your Own Radar tool at <a href="https://radar.thoughtworks.com/" class="text-fish-blue-600 underline hover:no-underline">https://radar.thoughtworks.com</a> to create an interactive visualization</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">The visualization tool requires a CSV or Google Sheet with columns: name, ring, quadrant, isNew, description</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Tips for Success</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">5 to 10 technologies is perfect for your first radar</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Place technologies where YOU are with them, not where the industry is</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Use different quadrants to show breadth across your skill set</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Use isNew=TRUE for technologies you recently discovered</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Set a reminder to update your radar quarterly as your interests and skills evolve</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Use your radar to guide learning priorities and your career roadmap</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Share it with mentors. Your radar can spark valuable conversations about your career path.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Helpful Resources</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Build Your Own Radar tool: <a href="https://radar.thoughtworks.com/" class="text-fish-blue-600 underline hover:no-underline">https://radar.thoughtworks.com/</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">GitHub repository with documentation: <a href="https://github.com/thoughtworks/build-your-own-radar" class="text-fish-blue-600 underline hover:no-underline">https://github.com/thoughtworks/build-your-own-radar</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Thoughtworks Radar FAQ: <a href="https://www.thoughtworks.com/en-us/radar/faq" class="text-fish-blue-600 underline hover:no-underline">https://www.thoughtworks.com/en-us/radar/faq</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Your radar is a living document. It should evolve as you grow.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <!-- Lab 4: Career Exploration with AI & NotebookLM -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Career Exploration with AI &amp; NotebookLM
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-fish-blue-100 px-3 py-1 text-sm font-semibold text-fish-blue-700">
                    15 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  Use AI tools and Google NotebookLM to research a role you're interested in, prepare for interviews, and make informed decisions about your career path.
                </p>

                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Getting Started</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Navigate to <a href="https://notebooklm.google.com/" class="text-fish-blue-600 underline hover:no-underline">Google NotebookLM</a> and create a new notebook</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Search for a role you're interested in (e.g., Solutions Architect, Staff Engineer, Engineering Manager)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Import relevant sources such as job postings, blog posts, or career guides into your notebook</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Research Your Role</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Use the chat to ask: How many years of experience are typically needed for this role?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Ask about certifications or credentials that are valuable for this career path</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Discover relevant podcasts, videos, and books to deepen your understanding of the role</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Explore Further with AI</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Use AI to help you prepare for an interview for this role — ask for common questions and how to approach them</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Compare options such as cloud providers, frameworks, or specializations relevant to the role</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Research learning paths and create a roadmap for building the skills you need</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Discussion</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Share your findings with a neighbor — what role did you explore and what surprised you?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">Discuss how AI tools changed the research process compared to traditional searching</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-fish-blue-600 font-semibold">&bull;</span>
                        <span class="text-sm leading-6 text-slate-700">What are the strengths and limitations of using AI for career exploration?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>

    <!-- Resources -->
    <section class="scroll-mt-14 border-t border-slate-100 bg-slate-50 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Resources
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-700">
            Here are some helpful resources to prepare for the workshop and continue learning afterward:
          </p>

          <div class="mt-8 space-y-4">
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
              :href="workshop.registrationUrl"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Arc of AI Workshop Registration</h3>
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
            Ready to Level Up Your Skills?
          </h2>
          <p class="mt-6 text-lg leading-8 text-fish-blue-100">
            Join us for this hands-on workshop and discover how to apply software engineering fundamentals in the age of AI.
          </p>
          <div class="mt-10">
            <Button
              :href="workshop.registrationUrl"
              color="white"
              class="text-lg"
            >
              Register Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
