<template>
  <section
    id="table-of-contents"
    aria-labelledby="table-of-contents-title"
    class="scroll-mt-14 pt-8 pb-16 sm:scroll-mt-32 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-32"
  >
    <Container>
      <SectionHeading id="table-of-contents-title" title="Table of contents" />
      <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Master the fundamentals that matter.
      </p>
      <p class="mt-4 text-lg tracking-tight text-slate-700">
        From code readability to architecture and from testing to career growth, gain the complete foundation for a successful engineering career.
      </p>
    </Container>
    <Container size="lg" class="mt-16">
      <ol role="list" class="grid grid-cols-1 gap-x-12 gap-y-10 [counter-reset:section] lg:grid-cols-2">
        <li v-for="chapter in chapters" :key="chapter.id" class="[counter-increment:section]">
          <h3 class="font-display text-3xl font-extrabold tracking-tight text-slate-900 before:mr-2 before:font-mono before:text-sm before:font-normal before:text-slate-500 before:content-[counter(section,decimal-leading-zero)]">
            {{ chapter.title }}
          </h3>
          <p class="mt-4 text-sm text-slate-600">{{ chapter.description }}</p>
          <ul role="list" class="mt-4 space-y-1.5 text-base tracking-tight text-slate-900">
            <li v-for="page in chapter.pages" :key="page">{{ page }}</li>
          </ul>
        </li>
      </ol>
    </Container>
  </section>
</template>

<script setup>
const chapters = [
  {
    id: 1,
    title: 'Core Skills',
    description: 'Essential foundations for becoming a true software engineer.',
    pages: ['Programmer to Engineer', 'Reading Code', 'Writing Code']
  },
  {
    id: 2,
    title: 'Technical Practices',
    description: 'Master the practices that separate good engineers from great ones.',
    pages: ['Software Modeling', 'Automated Testing', 'Working with Existing Code']
  },
  {
    id: 3,
    title: 'Application Development',
    description: 'Build applications that scale and delight users.',
    pages: ['User Interface Design', 'Data Management', 'Software Architecture', 'Production Deployment']
  },
  {
    id: 4,
    title: 'Professional Development',
    description: 'Level up your skills and advance your career.',
    pages: ['Productivity', 'Continuous Learning', 'Communication & Collaboration', 'Career Management', 'AI Tools Integration']
  }
]
</script>
