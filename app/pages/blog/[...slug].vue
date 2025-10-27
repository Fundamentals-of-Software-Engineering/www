<template>
  <div class="pt-16 pb-12 lg:pt-12">
    <Container size="md">
      <article>
        <header class="mb-8">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </NuxtLink>

          <time
            v-if="post.meta?.publishedAt"
            :datetime="post.meta.publishedAt"
            class="block font-mono text-sm text-slate-500 leading-7 mt-4"
          >
            {{ formatDate(post.meta.publishedAt) }}
          </time>

          <h1 class="mt-2 text-4xl font-display font-bold text-slate-900 sm:text-5xl">
            {{ post.title }}
          </h1>

          <p v-if="post.description" class="mt-4 text-xl text-slate-600 leading-8">
            {{ post.description }}
          </p>

          <div v-if="author" class="mt-6 flex items-center gap-x-4 pt-6 border-t border-slate-200">
            <NuxtImg
              :src="author.image"
              :alt="author.name"
              class="h-12 w-12 rounded-full bg-slate-100"
              width="48"
              height="48"
            />
            <div>
              <p class="font-semibold text-slate-900">
                {{ author.name }}
              </p>
              <p class="text-sm text-slate-600">
                {{ author.role }}
              </p>
            </div>
          </div>
        </header>

        <div class="prose prose-slate prose-lg max-w-none mt-8
                    prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900
                    prose-p:text-slate-700 prose-p:leading-relaxed
                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
                    prose-strong:text-slate-900 prose-strong:font-semibold
                    prose-ul:list-disc prose-ol:list-decimal
                    prose-li:text-slate-700 prose-li:marker:text-slate-400
                    prose-code:text-slate-900 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                    prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-slate-900 prose-pre:text-slate-100
                    prose-blockquote:border-l-blue-600 prose-blockquote:text-slate-700
                    prose-hr:border-slate-200
                    prose-img:rounded-lg">
          <ContentRenderer :value="post" />
        </div>
      </article>
    </Container>
  </div>
</template>

<script setup>
import { getAuthorBySlug } from '~/data/authors'

const route = useRoute()
const siteUrl = 'https://fundamentalsofswe.com'

// Get the slug from route params
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

// Query the blog post using collection API - need full path with /blog/ prefix
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .path(`/blog/${slug}`)
    .first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Blog post not found'
  })
}

// Get author data
const author = computed(() => {
  if (!post.value?.meta?.author) return null
  return getAuthorBySlug(post.value.meta.author)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: `${post.value.title} - FOSE Blog`,
  description: post.value.description || '',
  ogTitle: post.value.title,
  ogDescription: post.value.description || '',
  ogImage: post.value.meta?.image || `${siteUrl}/images/fose_cover_final.jpg`,
  ogUrl: `${siteUrl}/blog/${route.params.slug.join('/')}`,
  ogType: 'article',
  articlePublishedTime: post.value.meta?.publishedAt,
  articleAuthor: author.value?.name,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value.title,
  twitterDescription: post.value.description || '',
  twitterImage: post.value.meta?.image || `${siteUrl}/images/fose_cover_final.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/blog/${route.params.slug.join('/')}` }
  ]
})
</script>
