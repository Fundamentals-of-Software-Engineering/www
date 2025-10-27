<template>
  <header class="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
    <div class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pt-20 lg:pb-36 xl:py-32">
      <!-- Book Cover with Background Pattern -->
      <div class="relative flex items-end lg:col-span-5 lg:row-span-2">
        <div class="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
          <GridPattern
            width="72"
            height="56"
            x="50%"
            y="16"
            class="absolute inset-0"
          />
        </div>
        <div class="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
          <img
            class="w-full"
            src="/images/fose_cover_final.jpg"
            alt="Book cover"
          />
        </div>
      </div>

      <!-- Testimonial -->
      <div class="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
        <div class="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-slate-100" />
        <figure class="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <div class="flex justify-center text-blue-600 lg:justify-start">
            <StarRating />
          </div>
          <blockquote class="mt-2">
            <p class="font-display text-xl font-medium text-slate-900">
              "There has never been a more important time for a book like this. As early talent navigates the disruption of AI in the job market and the strain remote work places on traditional apprenticeships, this book offers the wisdom and guidance needed to grow, adapt, and succeed."
            </p>
          </blockquote>
          <figcaption class="mt-2 text-sm text-slate-500">
            <strong class="font-semibold text-blue-600 before:content-['—_']">
              Christopher M. Judd
            </strong>, President of Judd Solutions
          </figcaption>
        </figure>
      </div>

      <!-- Hero Content -->
      <div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
        <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
          <h1 class="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
            Level Up Your Software Engineering Career
          </h1>
          <p class="mt-4 text-3xl text-slate-600">
            The essential guide to mastering fundamentals beyond coding. Nate Schutta and Dan Vega teach you maintainability, architecture, and the skills that accelerate your career.
          </p>
          <div class="mt-8 flex gap-4">
            <Button
              to="#get-the-book"
              color="blue"
            >
              Get the book
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Hero section for the home page
</script>
