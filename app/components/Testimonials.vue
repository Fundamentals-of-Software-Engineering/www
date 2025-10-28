<template>
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
    class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:pt-32 lg:pb-16"
  >
    <Container>
      <SectionHeading id="testimonials-title" title="Testimonials" />
      <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Loved by Software Engineers everywhere.
      </p>
      <p class="mt-4 text-lg tracking-tight text-slate-700">
        Hundreds of engineers have used this book to level up their skills and advance their careers.
      </p>
    </Container>
    <Container size="lg" class="mt-16">
      <ol role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="relative overflow-hidden rounded-2xl border border-slate-200 p-8">
          <!-- Sample overlay -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="text-slate-200 font-display text-7xl font-bold transform -rotate-12 opacity-40">
              SAMPLE
            </span>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <div class="flex gap-1 text-blue-600">
              <StarRating />
            </div>
            <p class="mt-4 text-base leading-7 text-slate-700">
              "{{ testimonial.content }}"
            </p>
            <p class="mt-4 text-sm font-semibold text-slate-900">{{ testimonial.author }}</p>
            <p class="text-sm text-slate-600">{{ testimonial.role }}</p>
          </div>
        </li>
      </ol>
      <!-- Call to action for real testimonials -->
      <div class="mt-12 text-center">
        <p class="text-lg text-slate-700">
          Have you read the book? We'd love to feature your testimonial!
          <a href="mailto:hello@fundamentalsofswe.com" class="font-semibold text-blue-600 hover:text-blue-700">Reach out to us</a>
          or share your thoughts using
          <span class="font-semibold text-blue-600">#fundamentalsofSWE</span>
          on social media.
        </p>
      </div>
    </Container>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    content: 'This book gave me the confidence to take on more complex projects. The sections on architecture and testing were game-changers.',
    author: 'Sarah Martinez',
    role: 'Full Stack Developer'
  },
  {
    id: 2,
    content: 'Finally, a resource that covers what bootcamps miss. The career growth chapter alone was worth the price.',
    author: 'James Kim',
    role: 'Software Engineer'
  },
  {
    id: 3,
    content: 'I wish I had this book when I started my career. Would have saved me years of trial and error.',
    author: 'Emily Chen',
    role: 'Senior Engineer'
  },
  {
    id: 4,
    content: 'The AI tools section is incredibly timely. Shows you how to use them effectively without becoming dependent.',
    author: 'Michael Brown',
    role: 'Tech Lead'
  },
  {
    id: 5,
    content: 'Practical, actionable advice from cover to cover. No fluff, just what you need to know.',
    author: 'Jessica Taylor',
    role: 'Backend Developer'
  },
  {
    id: 6,
    content: 'The code review chapter transformed how our team collaborates. Highly recommended for any team.',
    author: 'David Wilson',
    role: 'Engineering Manager'
  }
]
</script>
