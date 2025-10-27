<template>
  <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
    <Container size="lg">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-display font-bold text-slate-900 sm:text-5xl">
          From the blog
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      <div v-if="blogPosts && blogPosts.length > 0" class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogCard
          v-for="post in blogPosts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :slug="post.path.replace('/blog/', '')"
          :published-at="post.meta.publishedAt"
          :author="getAuthor(post.meta.author)"
        />
      </div>
      <div v-else class="mt-16">
        <p class="text-slate-600">No blog posts found.</p>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { getAuthorBySlug } from '~/data/authors'

const siteUrl = 'https://fundamentalsofswe.com'

// Query all blog posts using the new collection API
const { data: blogPosts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
      .all()
)
console.log('Blog posts:', blogPosts.value)

// Helper function to get author by slug
const getAuthor = (authorSlug) => {
  if (!authorSlug) return null
  return getAuthorBySlug(authorSlug)
}

useSeoMeta({
  title: 'Blog - Fundamentals of Software Engineering',
  description: 'Read articles about software engineering fundamentals, best practices, and career advice from industry experts.',
  ogTitle: 'FOSE Blog - Software Engineering Insights',
  ogDescription: 'Expert articles on software engineering fundamentals, architecture, testing, and career growth.',
  ogImage: `${siteUrl}/images/fose_cover_final.jpg`,
  ogUrl: `${siteUrl}/blog`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'FOSE Blog',
  twitterDescription: 'Software engineering insights from industry experts.',
  twitterImage: `${siteUrl}/images/fose_cover_final.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/blog` }
  ]
})

</script>
