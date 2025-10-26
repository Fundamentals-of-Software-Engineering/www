<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div class="max-w-lg w-full text-center">
      <div class="mb-8">
        <h1 class="font-display text-9xl font-extrabold text-blue-600">
          {{ error.statusCode }}
        </h1>
        <h2 class="mt-4 font-display text-3xl font-bold text-slate-900">
          {{ errorTitle }}
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          {{ errorMessage }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex justify-center items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
        >
          Go to Homepage
        </NuxtLink>
        <button
          @click="handleError"
          class="inline-flex justify-center items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
        >
          Try Again
        </button>
      </div>

      <div class="mt-12">
        <p class="text-sm text-slate-500">
          Need help? <NuxtLink to="/authors" class="text-blue-600 hover:text-blue-500">Contact us</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const errorTitle = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return 'Page Not Found'
    case 500:
      return 'Server Error'
    default:
      return 'An Error Occurred'
  }
})

const errorMessage = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted."
    case 500:
      return "Sorry, something went wrong on our end. We're working to fix it."
    default:
      return props.error.message || 'An unexpected error occurred. Please try again.'
  }
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: `${props.error.statusCode} - ${errorTitle.value}`
})
</script>
