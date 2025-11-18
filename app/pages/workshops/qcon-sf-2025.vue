<script setup>
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
  abstract: `
    <p>This intensive workshop bridges fundamental programming skills with the expertise needed to work alongside AI tools. Participants engage in a balanced mix of conceptual teaching and hands-on exercises combining traditional and AI-assisted approaches to reinforce practical software engineering principles.</p>
    <p>Learn to transition from programmer to software engineer, create maintainable code, and master AI code assistance while critically evaluating outputs. Through hands-on mini-workshops, you'll gain practical experience with modern development workflows and build a professional growth roadmap in the AI era.</p>
  `,
  keyTakeaways: [
    'Transition from programmer to software engineer mindset',
    'Create maintainable, readable code communicating clear intent',
    'Apply effective legacy codebase management techniques',
    'Master AI code assistance while critically evaluating outputs',
    'Apply architecture patterns appropriately',
    'Build professional growth roadmap in the AI era'
  ],
  prerequisites: [
    'Working knowledge of at least one programming language',
    'Basic understanding of software development concepts',
    'Laptop with code editor and Git installed',
    'Optional: Access to an AI coding assistant (Claude Code, GitHub Copilot, ChatGPT, or similar) for the AI-Assisted Feature Development mini workshop'
  ],
  instructors: [
    {
      name: 'Nate Schutta',
      title: 'Software Architect at Thoughtworks, Java Champion',
      bio: 'Author of "Fundamentals of Software Engineering" and other O\'Reilly publications. Adjunct professor at University of Minnesota teaching technical change evaluation.'
    },
    {
      name: 'Dan Vega',
      title: 'Java Champion and Spring Developer Advocate at Broadcom',
      bio: '23+ years of web development experience. Active blogger, YouTuber, course creator, and podcaster.'
    }
  ],
  miniWorkshops: [
    {
      id: 1,
      title: 'Reading Code & Exploring Unfamiliar Codebases',
      description: 'In this hands-on exercise, you\'ll explore the Spring PetClinic application, a real-world codebase that may be in a language you\'ve never used before. This is intentional! We\'ll practice the fundamental skill of reading and understanding unfamiliar code, a critical ability for every software engineer.',
      duration: '15 minutes',
      repoUrl: 'https://github.com/spring-projects/spring-petclinic',
      exercises: [
        {
          category: 'Initial Orientation',
          tasks: [
            'Identify the tech stack: Without running the app, what technologies/frameworks can you identify from project files (pom.xml, package structure)?',
            'Find the entry point: Locate the main application class. What annotations do you see?',
            'Map the architecture: Based on folder structure alone, what architectural pattern does this app follow?'
          ]
        },
        {
          category: 'Code Navigation',
          tasks: [
            'Follow a user journey: Pick one entity (like "Owner" or "Pet") and trace it through the codebase - find its model, repository, service, and controller',
            'Understand the data model: Without looking at documentation, can you sketch the database schema based on the entity classes?',
            'Find the database configuration: Where and how is the database configured?'
          ]
        },
        {
          category: 'Pattern Recognition',
          tasks: [
            'Identify design patterns: Find examples of patterns being used (Repository, MVC, dependency injection)',
            'Spot the conventions: What naming conventions do you notice for classes, methods, and packages?',
            'Mystery endpoint: Given a URL like /owners/{ownerId}/pets/new, trace what happens when someone submits the form'
          ]
        },
        {
          category: 'Reflection',
          tasks: [
            'What made this codebase easier or harder to understand?',
            'What strategies did you use to navigate the code?',
            'How long did it take to understand the basic flow?',
            'What could you apply to your own projects?'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'AI-Assisted Feature Development',
      description: 'Transform how you approach new features by leveraging AI as a collaborative partner, not just a code generator. This hands-on session teaches you to think systematically about feature development while using AI tools effectively.',
      duration: '10 minutes',
      repoUrl: 'https://github.com/spring-projects/spring-petclinic',
      exercises: [
        {
          category: 'Prerequisites',
          tasks: [
            'Access to an AI coding assistant (Claude Code, GitHub Copilot, ChatGPT, or similar)',
            'Git and your preferred code editor installed',
            'Basic familiarity with web applications (any language/framework)',
            'Clone the Spring Pet Clinic repository: git clone https://github.com/spring-projects/spring-petclinic'
          ]
        },
        {
          category: 'Part 1: Exploring the Unknown',
          tasks: [
            'Using your AI assistant, ask strategic questions to understand the Spring Pet Clinic codebase',
            'What types of questions help you understand architecture vs. implementation details?',
            'Practice asking: "How is data persistence handled?" vs. "Show me the Owner entity"',
            'Experiment with different question styles: high-level overview vs. specific code locations',
            'Compare AI-assisted exploration with your manual exploration from the previous workshop',
            'Reflection: What did AI help you discover faster? What did manual exploration teach you better?'
          ]
        },
        {
          category: 'Part 2: Planning Mode - Weight Tracking Feature',
          tasks: [
            'Start with this prompt: "Add an optional weight field (in kg) to pets so we can track their health over time"',
            'Evaluate the AI\'s initial plan - what assumptions did it make?',
            'Iterate on requirements: "What edge cases should we consider for weight tracking?"',
            'Ask architectural questions: "Should we maintain weight history or just current weight?"',
            'Explore data modeling: "Should weight be nullable for existing pets?"',
            'Consider API impact: "How does this affect our API contracts?"',
            'Discuss implementation strategy: "What\'s the migration order for existing data?"',
            'Risk assessment: "What could break with this change? How do we ensure backward compatibility?"'
          ]
        },
        {
          category: 'Part 3: Critical Evaluation & Iteration',
          tasks: [
            'Review the AI\'s suggested implementation plan with a critical eye',
            'Challenge assumptions: Does the proposed solution handle all edge cases?',
            'Ask follow-up questions to refine the approach',
            'Request alternative approaches: "What are other ways to implement weight history?"',
            'Discuss testing strategy: "How should we test this feature?"',
            'Consider user experience: "How should the UI handle weight entry and display?"',
            'Reflection: How did asking strategic questions improve the final plan?',
            'Key takeaway: AI is most valuable when you guide it with thoughtful questions'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Fundamentals of Software Engineering Book',
      url: 'https://www.oreilly.com/library/view/fundamentals-of-software/9781098145279/',
      type: 'book'
    },
    {
      title: 'Workshop Slides (PDF)',
      url: '/workshops/qcon-sf-2025/slides.pdf',
      type: 'slides'
    },
    {
      title: 'Fundamentals of Software Engineering GitHub Organization',
      url: 'https://github.com/Fundamentals-of-Software-Engineering',
      type: 'guide'
    },
    {
      title: 'QCon Workshop Registration',
      url: 'https://qconsf.com/training/nov2025/fundamentals-software-engineering-age-ai',
      type: 'guide'
    }
  ],
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
              <span v-if="workshop.time" class="text-slate-400">•</span>
              <span v-if="workshop.time">{{ workshop.time }}</span>
            </div>

            <div v-if="workshop.duration" class="flex items-center gap-2">
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

          <div v-if="workshop.address" class="mt-2 ml-7 text-sm text-slate-600">
            {{ workshop.address }}
          </div>

          <!-- CTA Button -->
          <div class="mt-8">
            <Button
              v-if="workshop.registrationUrl && workshop.registrationUrl !== '#'"
              :href="workshop.registrationUrl"
              color="blue"
              class="text-lg"
            >
              Register for Workshop
            </Button>
            <span v-else class="inline-block rounded-md bg-slate-200 px-6 py-3 text-base font-semibold text-slate-600">
              Registration Opening Soon
            </span>
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
          <div class="prose prose-slate mt-6 text-base leading-7 text-slate-700" v-html="workshop.abstract" />
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
            <li
              v-for="(takeaway, index) in workshop.keyTakeaways"
              :key="index"
              class="flex gap-4"
            >
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">{{ takeaway }}</p>
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
            <li
              v-for="(prerequisite, index) in workshop.prerequisites"
              :key="index"
              class="flex gap-3"
            >
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p class="text-base leading-7 text-slate-700">{{ prerequisite }}</p>
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
            <article
              v-for="miniWorkshop in workshop.miniWorkshops"
              :key="miniWorkshop.id"
              class="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div class="p-8">
                <!-- Header -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="flex-1 text-2xl font-bold leading-tight text-slate-900">
                    {{ miniWorkshop.title }}
                  </h3>
                  <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {{ miniWorkshop.duration }}
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-4 text-base leading-7 text-slate-700">
                  {{ miniWorkshop.description }}
                </p>

                <!-- Repository Link -->
                <div v-if="miniWorkshop.repoUrl" class="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div class="flex items-start gap-3">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <div class="flex-1">
                      <h4 class="text-sm font-semibold text-blue-900">Repository</h4>
                      <a :href="miniWorkshop.repoUrl" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-blue-700 hover:text-blue-800 hover:underline break-all">
                        {{ miniWorkshop.repoUrl }}
                      </a>
                      <p class="mt-2 text-sm text-blue-900">
                        <strong>Clone the repository:</strong>
                      </p>
                      <code class="mt-1 block rounded bg-white px-3 py-2 text-xs text-slate-800 border border-blue-200">
                        git clone {{ miniWorkshop.repoUrl }}
                      </code>
                    </div>
                  </div>
                </div>

                <!-- Important Note - Only for first mini workshop -->
                <div v-if="miniWorkshop.id === 1" class="mt-8 rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
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
                <div v-if="miniWorkshop.exercises" class="mt-8 space-y-6">
                  <div
                    v-for="(exercise, exerciseIndex) in miniWorkshop.exercises"
                    :key="exerciseIndex"
                  >
                    <h4 class="text-lg font-bold text-slate-900">{{ exercise.category }}</h4>
                    <ul class="mt-3 space-y-2">
                      <li
                        v-for="(task, taskIndex) in exercise.tasks"
                        :key="taskIndex"
                        class="flex gap-3"
                      >
                        <span class="flex-shrink-0 text-blue-600 font-semibold">•</span>
                        <span class="text-sm leading-6 text-slate-700">{{ task }}</span>
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
              v-for="(resource, index) in workshop.resources"
              :key="index"
              :href="resource.url"
              class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-md"
              :class="{ 'pointer-events-none opacity-50': resource.url === '#' }"
            >
              <div class="flex-shrink-0">
                <svg v-if="resource.type === 'book'" class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <svg v-else-if="resource.type === 'slides'" class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <svg v-else class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-semibold text-slate-900">{{ resource.title }}</h3>
                <p v-if="resource.url === '#'" class="mt-1 text-sm text-slate-500">Coming soon</p>
              </div>
              <svg v-if="resource.url !== '#'" class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              v-if="workshop.registrationUrl && workshop.registrationUrl !== '#'"
              :href="workshop.registrationUrl"
              color="white"
              class="text-lg"
            >
              Register Now
            </Button>
            <Button
              v-else
              to="/workshops"
              color="white"
              variant="outline"
              class="text-lg"
            >
              View All Workshops
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
