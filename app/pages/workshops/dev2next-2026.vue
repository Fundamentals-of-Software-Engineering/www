<script setup>
// Workshop metadata for SEO and date formatting
// Venue and start time come from dev2next.com (schedule and venue pages).
// Lone Tree, CO is on Mountain Time, so October 12 is MDT (UTC-6).
const workshop = {
  slug: 'dev2next-2026',
  title: 'Fundamentals of Software Engineering in the Age of AI',
  date: new Date('2026-10-12T09:00:00-06:00'),
  time: '9:00 AM MDT',
  duration: '8 hours',
  location: 'Dev2Next 2026',
  venue: 'Denver Marriott South at Park Meadows, Lone Tree',
  address: '10345 Park Meadows Drive, Lone Tree, CO 80124 (Lonetree room)',
  description: 'A full-day, hands-on workshop on the software engineering fundamentals you still need to use AI coding agents well.',
  registrationUrl: 'https://www.dev2next.com/register'
}

const learnings = [
  'Why the fundamentals matter more now, not less. The fundamentals didn\'t change. The ratio did.',
  'How to read unfamiliar code before you prompt an agent to change it',
  'How to review AI-generated code and spot what agents get wrong',
  'How to use specs and tests as the gates for agent work',
  'How to work safely with existing code, with a net of tests in place first',
  'How to learn new things with AI without skipping the reps',
  'How to turn your fundamentals into your agent\'s instructions, in your own AGENTS.md'
]

const labRepo = 'https://github.com/Fundamentals-of-Software-Engineering/workshop'
const petclinicRepo = 'https://github.com/Fundamentals-of-Software-Engineering/spring-petclinic'

const labs = [
  {
    title: 'Read before you prompt',
    folder: 'read-before-you-prompt-lab',
    description: 'Find your way around Spring PetClinic on your own first. Then ask your agent for a tour and check its answers against what you found.'
  },
  {
    title: 'Defuse the grenade',
    folder: 'defuse-the-grenade-lab',
    description: 'An AI agent opened a pull request. It compiles and every test passes. Review it with your team and find the problems before it merges.'
  },
  {
    title: 'Spec it before you prompt',
    folder: 'spec-it-before-you-prompt-lab',
    description: 'Build the same small feature twice. Once from a one-line prompt, once from a short spec. Then compare what you get.'
  },
  {
    title: 'Net before refactor',
    folder: 'net-before-refactor-lab',
    description: 'Write tests that pin down what the code does today. Then let your agent refactor it, with your tests as the safety net.'
  },
  {
    title: 'Learn it, don\'t ship it',
    folder: 'learn-it-dont-ship-it-lab',
    description: 'Use your agent as a tutor, not an author, to learn something new. Then check what stuck with a short quiz.'
  },
  {
    title: 'Capstone: your AGENTS.md',
    folder: 'capstone-agents-md',
    description: 'Each lab adds a few lines to your own AGENTS.md. Pull them together into one file and take it home to your team.'
  }
]

const extraLabs = [
  {
    title: 'Research a role with Gemini Notebook',
    folder: 'tools/notebooklm-career-lab',
    description: 'Gather job posts and career guides for a role you want. Use Gemini Notebook (formerly NotebookLM) to find the skills that keep showing up.'
  },
  {
    title: 'Your personal tech radar',
    folder: 'tools/tech-radar-lab',
    description: 'Sort the tools you care about into adopt, trial, assess and hold. Use it to decide what to learn next.'
  }
]

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
    <!-- Based on the official abstract at https://www.dev2next.com/schedule, split into shorter sentences. -->
    <section class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            About This Workshop
          </h2>
          <div class="prose prose-slate mt-6 text-base leading-7 text-slate-700">
            <p>Agentic coding assistants and AI chat in your editor are changing how we build software. Some say it's the end of software engineering. Is it time to explore other careers? Not so fast. The rumors of our demise are greatly exaggerated! These tools can boost productivity. But to use them well, developers still need to master the fundamentals of the craft.</p>
            <p>This intensive workshop bridges the gap between what developers learn in school and what they need on a professional team. On that team, people and AI tools now work side by side. It's based on our book, <em>Fundamentals of Software Engineering</em>. We'll guide you from programmer to well-rounded software engineer. You'll learn to get the most from AI tools without losing the fundamentals.</p>
            <p>You'll build technical and professional skills that last, no matter how languages, frameworks and AI tools change. The day is a balanced mix of teaching, discussion and hands-on labs. You'll work on realistic scenarios with both traditional and AI-assisted approaches. Along the way, you'll learn when to bring AI into your workflow, and when not to.</p>
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
            <li v-for="learning in learnings" :key="learning" class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">{{ learning }}</p>
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
            To get the most out of this workshop, please bring:
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Working knowledge of at least one programming language. The labs use Java and <a :href="petclinicRepo" target="_blank" rel="noopener noreferrer" class="text-fish-blue-600 underline hover:no-underline">Spring PetClinic</a>.</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">A laptop with Git, Java 17 or newer, and an IDE or code editor</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Optional: An AI coding assistant (Claude Code, GitHub Copilot, Cursor, Codex or similar). No assistant? You can pair up with someone who has one.</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Optional: <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" class="text-fish-blue-600 underline hover:no-underline">Docker</a>, to run PetClinic's full test suite</p>
            </li>
            <li class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">Optional: A Google account for the <a href="https://notebook.google.com" target="_blank" rel="noopener noreferrer" class="text-fish-blue-600 underline hover:no-underline">Gemini Notebook</a> lab (formerly NotebookLM)</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Before the workshop -->
    <section id="before-the-workshop" class="scroll-mt-14 border-t border-slate-100 py-16 sm:scroll-mt-32 sm:py-20">
      <Container>
        <div class="max-w-3xl">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Before the workshop
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-700">
            Please set up your laptop before Monday, on good wifi. Most of the setup is downloads. The conference wifi will thank you.
          </p>
          <p class="mt-4 text-base leading-7 text-slate-700">
            Clone our copy of Spring PetClinic. It's the only thing you need. You'll work on it all day, and every lab is a branch in it. Then build it once, so the downloads happen at home:
          </p>
          <pre class="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800"><code>git clone https://github.com/Fundamentals-of-Software-Engineering/spring-petclinic.git
cd spring-petclinic
./mvnw -DskipTests package</code></pre>
          <p class="mt-4 text-base leading-7 text-slate-700">
            You're ready when it ends with <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm">BUILD SUCCESS</code>.
          </p>
          <p class="mt-4 text-base leading-7 text-slate-700">
            On Windows, type <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm">.\mvnw.cmd</code> instead of <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm">./mvnw</code>.
          </p>
          <p class="mt-4 text-base leading-7 text-slate-700">
            Please don't read the PetClinic code ahead of time. The first lab starts with seeing it fresh.
          </p>
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
            The day is built around six hands-on labs. They all use one codebase, Spring PetClinic. Each lab works the same way. Do it yourself first. Then do it with your agent. Then compare and judge.
          </p>

          <!-- Repository Link -->
          <div class="mt-8 rounded-lg border border-fish-blue-200 bg-fish-blue-50 p-4">
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 flex-shrink-0 text-fish-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-fish-blue-900">Lab instructions</h4>
                <a :href="labRepo" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-fish-blue-700 hover:text-fish-blue-800 hover:underline break-all">
                  {{ labRepo }}
                </a>
                <p class="mt-2 text-sm text-fish-blue-900">
                  Read them in your browser. You don't need to clone this one. The code is in the PetClinic clone from <a href="#before-the-workshop" class="underline hover:no-underline">Before the workshop</a>.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 space-y-8">
            <article
              v-for="(lab, index) in labs"
              :key="lab.folder"
              class="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    <span class="text-fish-blue-600">Lab {{ index + 1 }}.</span> {{ lab.title }}
                  </h3>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  {{ lab.description }}
                </p>

                <!-- Lab Folder Link -->
                <a
                  :href="`${labRepo}/tree/main/${lab.folder}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fish-blue-600 hover:gap-3 hover:text-fish-blue-700 transition-all"
                >
                  <span>Open the lab</span>
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          <!-- Optional Extras -->
          <h3 class="mt-16 font-display text-2xl font-extrabold tracking-tight text-slate-900">
            Optional Extras
          </h3>
          <p class="mt-4 text-base leading-7 text-slate-700">
            Try these if you finish early, or take them home after the workshop.
          </p>

          <div class="mt-8 space-y-8">
            <article
              v-for="lab in extraLabs"
              :key="lab.folder"
              class="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    {{ lab.title }}
                  </h3>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  {{ lab.description }}
                </p>

                <!-- Lab Folder Link -->
                <a
                  :href="`${labRepo}/tree/main/${lab.folder}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fish-blue-600 hover:gap-3 hover:text-fish-blue-700 transition-all"
                >
                  <span>Open the lab</span>
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
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
            Here are some helpful resources to prepare for the workshop and keep learning afterward:
          </p>

          <div class="mt-8 space-y-4">
            <a
              href="https://www.oreilly.com/library/view/fundamentals-of-software/9781098145279/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Fundamentals of Software Engineering on O'Reilly</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://www.amazon.com/Fundamentals-Software-Engineering-Coder-Engineer/dp/109814323X/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-fish-blue-600 hover:shadow-md"
            >
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-fish-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Fundamentals of Software Engineering on Amazon</h3>
              </div>
              <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://github.com/Fundamentals-of-Software-Engineering"
              target="_blank"
              rel="noopener noreferrer"
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

            <!-- Slides: swap this div for a link once the PDF is posted (see qcon-sf-2025.vue for the pattern) -->
            <div class="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-white p-6">
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">Workshop Slides</h3>
                <p class="mt-1 text-sm text-slate-600">The slides will be posted here after the workshop.</p>
              </div>
            </div>
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
            Join us for this hands-on workshop. Learn how to apply software engineering fundamentals in the age of AI.
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
