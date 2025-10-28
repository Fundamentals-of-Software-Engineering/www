<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
    <Container>
      <figure class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-0">
        <div class="relative h-96 overflow-hidden rounded-2xl bg-slate-100 lg:row-span-2">
          <NuxtImg
            :src="author.image"
            :alt="author.name"
            class="absolute inset-0 h-full w-full object-cover"
            width="600"
            height="600"
            format="webp"
          />
        </div>
        <div class="lg:row-end-1">
          <div class="flex gap-1 text-blue-600">
            <StarRating />
          </div>
          <blockquote class="mt-4 text-xl font-medium leading-8 text-slate-900">
            <slot />
          </blockquote>
        </div>
        <figcaption class="text-sm lg:row-end-2 lg:mt-8">
          <div class="font-semibold text-slate-900">{{ author.name }}</div>
          <div class="mt-1 text-slate-600">{{ author.role }}</div>
        </figcaption>
      </figure>
    </Container>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    required: true
  }
})
</script>
