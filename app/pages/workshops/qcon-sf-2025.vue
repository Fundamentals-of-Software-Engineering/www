<script setup>
// Workshop metadata for SEO and date formatting
const workshop = {
  slug: 'qcon-sf-2025',
  title: 'Fundamentals of Software Engineering in the Age of AI',
  date: new Date('2025-11-20T13:00:00-08:00'),
  time: '1:00 PM PST',
  duration: '3 hours',
  location: 'QCon San Francisco 2025',
  venue: 'Seacliff CD, Hyatt Regency San Francisco',
  address: '5 Embarcadero Center, San Francisco, CA 94111',
  description: 'This intensive workshop bridges fundamental programming skills with expertise needed to work alongside AI tools through a balanced mix of conceptual teaching and hands-on exercises.',
  registrationUrl: 'https://qconsf.com/training/nov2025/fundamentals-software-engineering-age-ai'
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
          <div class="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
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
              <span class="text-slate-400">•</span>
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
            <p>Learn to transition from programmer to software engineer, create maintainable code, and master AI code assistance while critically evaluating outputs. Through hands-on mini-workshops, you'll gain practical experience with modern development workflows and build a professional growth roadmap in the AI era.</p>
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
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Transition from programmer to software engineer mindset</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Create maintainable, readable code communicating clear intent</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Apply effective legacy codebase management techniques</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Master AI code assistance while critically evaluating outputs</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Apply architecture patterns appropriately</p>
            </li>
            <li class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p class="text-base leading-7 text-slate-700">Optional: Access to an AI coding assistant (Claude Code, GitHub Copilot, ChatGPT, or similar) for the AI-Assisted Feature Development mini workshop</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Mini Workshops -->
    <section class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-4xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Mini Workshops
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-700">
            This workshop is structured as a series of focused, hands-on mini-workshops, each exploring a different aspect of modern software engineering.
          </p>

          <div class="mt-12 space-y-8">
            <!-- Mini Workshop 1: Reading Code -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Reading Code & Exploring Unfamiliar Codebases
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    15 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  In this hands-on exercise, you'll explore the Spring PetClinic application, a real-world codebase that may be in a language you've never used before. This is intentional! We'll practice the fundamental skill of reading and understanding unfamiliar code, a critical ability for every software engineer.
                </p>

                <!-- Repository Link -->
                <div class="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div class="flex items-start gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <div class="flex-1">
                      <h4 class="text-sm font-semibold text-blue-900">Repository</h4>
                      <a href="https://github.com/spring-projects/spring-petclinic" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-blue-700 hover:text-blue-800 hover:underline break-all">
                        https://github.com/spring-projects/spring-petclinic
                      </a>
                      <p class="mt-2 text-sm text-blue-900">
                        <strong>Clone the repository:</strong>
                      </p>
                      <code class="mt-1 block rounded bg-white px-3 py-2 text-xs text-slate-800 border border-blue-200">
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
                        Please do not use AI assistants (ChatGPT, GitHub Copilot, etc.) for this exercise. We want to develop the fundamental skill of reading code and exploring unfamiliar codebases first. Once you've built this foundation, you'll be able to use AI to amplify this skill effectively.
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
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Identify the tech stack: Without running the app, what technologies/frameworks can you identify from project files (pom.xml, package structure)?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Find the entry point: Locate the main application class. What annotations do you see?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Map the architecture: Based on folder structure alone, what architectural pattern does this app follow?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Code Navigation</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Follow a user journey: Pick one entity (like "Owner" or "Pet") and trace it through the codebase - find its model, repository, service, and controller</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Understand the data model: Without looking at documentation, can you sketch the database schema based on the entity classes?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Find the database configuration: Where and how is the database configured?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Pattern Recognition</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Identify design patterns: Find examples of patterns being used (Repository, MVC, dependency injection)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Spot the conventions: What naming conventions do you notice for classes, methods, and packages?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Mystery endpoint: Given a URL like /owners/{ownerId}/pets/new, trace what happens when someone submits the form</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Reflection</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">What made this codebase easier or harder to understand?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">What strategies did you use to navigate the code?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">How long did it take to understand the basic flow?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">What could you apply to your own projects?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <!-- Mini Workshop 2: Technology Radar -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    Building a Personal Technology Radar
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    10 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  Learn to create your own technology radar, a powerful tool for tracking and categorizing technologies, tools, and frameworks to guide your learning journey and career development.
                  Discover how to organize your technical landscape into actionable categories and build a roadmap for continuous skill growth.
                </p>

                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">The Four Rings</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Adopt:</strong> Technologies you're currently using and mastering, your core competencies</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Trial:</strong> Technologies you're actively learning or experimenting with - in active development</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Assess:</strong> Technologies you're researching but haven't started learning - on your radar</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700"><strong>Hold:</strong> Technologies you've decided not to pursue right now - documented decisions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Exploring Thoughtworks Tech Radar</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Visit the official Thoughtworks Technology Radar: <a href="https://www.thoughtworks.com/radar" class="text-blue-600 underline hover:no-underline">https://www.thoughtworks.com/radar</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Notice how technologies move between rings over time as they mature or decline</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Pay attention to technologies in your domain or areas of interest</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Reflection: What patterns do you notice? What technologies appear in "Adopt" vs "Hold"?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Building Your Own Radar (Hands-On)</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Important: There are no wrong answers here! This is YOUR personal technology radar - it should reflect your unique interests, goals, and current skill level.</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">List 5-10 technologies you know or want to learn. You can use a spreadsheet, paper, or any format that works for you</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">For each technology, capture: Name, Ring (Adopt/Trial/Assess/Hold), Quadrant, and a brief description</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Example entries: React (Adopt, Languages & Frameworks), Docker (Trial, Tools), Rust (Assess, Languages & Frameworks)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Optional: Use the Thoughtworks Build Your Own Radar tool at <a href="https://radar.thoughtworks.com/" class="text-blue-600 underline hover:no-underline">https://radar.thoughtworks.com</a> to create an interactive visualization</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">The visualization tool requires a CSV or Google Sheet with columns: name, ring, quadrant, isNew, description</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Tips for Success</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Start small: 5-10 technologies is perfect for your first radar</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Be honest: Place technologies where YOU are with them, not where the industry is</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Mix categories: Use different quadrants to show breadth across your skill set</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Mark new discoveries: Use isNew=TRUE for technologies you recently discovered</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Review quarterly: Set a reminder to update your radar as your interests and skills evolve</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Combine with your career roadmap: Use your radar to guide learning priorities</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Share with mentors: Your radar can spark valuable discussions about your career path</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Helpful Resources</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Build Your Own Radar tool: <a href="https://radar.thoughtworks.com/" class="text-blue-600 underline hover:no-underline">https://radar.thoughtworks.com/</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">GitHub repository with documentation: <a href="https://github.com/thoughtworks/build-your-own-radar" class="text-blue-600 underline hover:no-underline">https://github.com/thoughtworks/build-your-own-radar</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Thoughtworks Radar FAQ: <a href="https://www.thoughtworks.com/en-us/radar/faq" class="text-blue-600 underline hover:no-underline">https://www.thoughtworks.com/en-us/radar/faq</a></span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Remember: Your radar is a living document,it should evolve as you grow</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <!-- Mini Workshop 3: AI-Assisted Feature Development -->
            <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    AI-Assisted Feature Development
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    10 minutes
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  Transform how you approach new features by leveraging AI as a collaborative partner, not just a code generator. This hands-on session teaches you to think systematically about feature development while using AI tools effectively.
                </p>

                <!-- Repository Link -->
                <div class="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div class="flex items-start gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <div class="flex-1">
                      <h4 class="text-sm font-semibold text-blue-900">Repository</h4>
                      <a href="https://github.com/spring-projects/spring-petclinic" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-blue-700 hover:text-blue-800 hover:underline break-all">
                        https://github.com/spring-projects/spring-petclinic
                      </a>
                      <p class="mt-2 text-sm text-blue-900">
                        <strong>Clone the repository:</strong>
                      </p>
                      <code class="mt-1 block rounded bg-white px-3 py-2 text-xs text-slate-800 border border-blue-200">
                        git clone https://github.com/spring-projects/spring-petclinic
                      </code>
                    </div>
                  </div>
                </div>

                <!-- Exercises -->
                <div class="mt-8 space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Prerequisites</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Access to an AI coding assistant (Claude Code, GitHub Copilot, ChatGPT, or similar)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Git and your preferred code editor installed</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Basic familiarity with web applications (any language/framework)</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Clone the Spring Pet Clinic repository: git clone https://github.com/spring-projects/spring-petclinic</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 1: Exploring the Unknown</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Using your AI assistant, ask strategic questions to understand the Spring Pet Clinic codebase</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">What types of questions help you understand architecture vs. implementation details?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Practice asking: "How is data persistence handled?" vs. "Show me the Owner entity"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Experiment with different question styles: high-level overview vs. specific code locations</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Compare AI-assisted exploration with your manual exploration from the previous workshop</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Reflection: What did AI help you discover faster? What did manual exploration teach you better?</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 2: Planning Mode - Weight Tracking Feature</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Start with this prompt: "Add an optional weight field (in kg) to pets so we can track their health over time"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Evaluate the AI's initial plan - what assumptions did it make?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Iterate on requirements: "What edge cases should we consider for weight tracking?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Ask architectural questions: "Should we maintain weight history or just current weight?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Explore data modeling: "Should weight be nullable for existing pets?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Consider API impact: "How does this affect our API contracts?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Discuss implementation strategy: "What's the migration order for existing data?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Risk assessment: "What could break with this change? How do we ensure backward compatibility?"</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Part 3: Critical Evaluation & Iteration</h4>
                    <ul class="mt-3 space-y-2">
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Review the AI's suggested implementation plan with a critical eye</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Challenge assumptions: Does the proposed solution handle all edge cases?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Ask follow-up questions to refine the approach</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Request alternative approaches: "What are other ways to implement weight history?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Discuss testing strategy: "How should we test this feature?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Consider user experience: "How should the UI handle weight entry and display?"</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Reflection: How did asking strategic questions improve the final plan?</span>
                      </li>
                      <li class="flex gap-3">
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">Key takeaway: AI is most valuable when you guide it with thoughtful questions</span>
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
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              href="/workshops/qcon-sf-2025/slides.pdf"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Workshop Slides (PDF)</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://github.com/Fundamentals-of-Software-Engineering"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              href="https://qconsf.com/training/nov2025/fundamentals-software-engineering-age-ai"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">QCon Workshop Registration</h3>
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
    <section class="scroll-mt-14 border-t border-slate-100 bg-blue-600 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl text-center">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Level Up Your Skills?
          </h2>
          <p class="mt-6 text-lg leading-8 text-blue-100">
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
