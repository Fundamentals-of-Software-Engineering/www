<template>
  <section id="get-the-book" class="relative overflow-hidden bg-blue-600 py-20 sm:py-32">
    <div class="absolute -top-32 right-[-100vw] bottom-0 left-[-100vw]" />
    <Container class="relative">
      <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <h2 class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get the Book
        </h2>
        <p class="mt-4 text-lg tracking-tight text-blue-100">
          Get immediate access to Fundamentals of Software Engineering through O'Reilly Learning Platform or pre-order your copy on Amazon.
        </p>

        <div class="mt-10 grid gap-8 sm:grid-cols-2">
          <!-- O'Reilly Learning Platform -->
          <div class="rounded-2xl bg-white p-8 shadow-xl">
            <h3 class="font-display text-2xl font-bold text-slate-900">
              O'Reilly Learning
            </h3>
            <p class="mt-4 text-base text-slate-600">
              Sign up for the O'Reilly Learning Platform and get immediate access to this book plus thousands of other technical resources.
            </p>
            <div class="mt-8">
              <Button
                href="https://learning.oreilly.com/library/view/fundamentals-of-software/9781098143220/"
                color="blue"
                class="w-full"
              >
                Access on O'Reilly
              </Button>
            </div>
          </div>

          <!-- Amazon Pre-order -->
          <div class="rounded-2xl bg-white p-8 shadow-xl">
            <h3 class="font-display text-2xl font-bold text-slate-900">
              Amazon
            </h3>
            <p class="mt-4 text-base text-slate-600">
              Pre-order your copy now on Amazon and have it delivered as soon as it's available.
            </p>
            <div class="mt-8">
              <Button
                href="https://www.amazon.com/Fundamentals-Software-Engineering-Coder-Engineer/dp/109814323X/"
                color="blue"
                class="w-full"
              >
                Pre-order on Amazon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
// Get the Book section with O'Reilly and Amazon options
</script>
