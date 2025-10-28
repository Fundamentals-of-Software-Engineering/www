<template>
  <div>
    <Hero/>
    <Introduction/>
    <TableOfContents/>
    <Testimonial
        id="testimonial-from-neal-ford"
        :author="{
        name: 'Neal Ford',
        role: 'Distinguished engineer at Thoughtworks',
        image: '/images/avatars/neal_ford.jpg'
      }"
    >
      <p>
        "Shockingly, no book exists which provides a holistic overview of what software engineering really entails in
        the modern world...until now. Filling a void that in hindsight seems huge, this book provides an outstanding
        overview of the many facets of software engineering, told from a practitioner's standpoint. Like other books in
        the Foundations series, this one is an invaluable guide for both new engineers and experienced ones to backfill
        parts of the ecosystem they haven't touched (or didn't know about). Highly recommended."
      </p>
    </Testimonial>
    <Testimonial
        id="testimonial-from-venkat-subramaniam"
        :author="{
        name: 'Dr. Venkat Subramaniam',
        role: 'Award-winning author and founder, Agile Developer, Inc.',
        image: '/images/avatars/venkatsubramaniam.jpg'
      }"
    >
      <p>
        "In this book, Dan and Nate teach quickly the essentials that years of formal education often fail to touch on.
        Their decades of experience shine through these pages, as they distil tactfully many dos and don'ts for
        professional developers."
      </p>
    </Testimonial>
    <GetTheBook/>
    <Testimonials/>
    <Testimonial
        id="testimonial-from-raju-gandhi"
        :author="{
        name: 'Raju Gandhi',
        role: 'Software craftsman, technophile, and teacher; author of Head First Software Architecture, Head First Git, and JavaScript Next',
        image: '/images/avatars/raju_gandhi.jpeg'
      }"
    >
      <p class="mb-4">
        "Every professional faces the uncertainty of "unknown unknowns". How does one even prepare when they don't know what to expect? How does one traverse unfamiliar terrain without having so much as a map?
      </p>
      <p class="mb-4">
        The journey towards software engineering, the deliberate act of moving away from being a "programmer" to an "engineer" has for a long time, presented a similar conundrum. You are challenged with a tsunami of buzzwords, left navigating the choppy waters of an ever-changing landscape, and are confronted with the rising tide of AI's influence in the workplace. It can be a daunting and overwhelming journey, both for newcomers and seasoned veterans alike.
      </p>
      <p>
        Fear not, because Nate and Dan have crafted the map that you've been looking for. This book lays out the fundamentals needed to transform your mindset into that of an engineer. This book isn't about technologies—it's about the skills that will equip you to not just survive, but thrive in today's tempestuous enterprise."
      </p>
    </Testimonial>
    <Author/>
    <Footer/>
  </div>
</template>

<script setup>
const siteUrl = 'https://fundamentalsofswe.com'

useSeoMeta({
  title: 'Fundamentals of Software Engineering - Master Engineering Beyond Coding',
  description: 'The essential guide to mastering software engineering fundamentals beyond coding. Learn maintainability, architecture, testing, and career growth from industry experts Nate Schutta and Dan Vega.',
  ogTitle: 'Fundamentals of Software Engineering - Master Engineering Beyond Coding',
  ogDescription: 'The essential guide to mastering software engineering fundamentals beyond coding. Learn maintainability, architecture, testing, and career growth from industry experts.',
  ogImage: `${siteUrl}/images/fose_cover_final.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fundamentals of Software Engineering',
  twitterDescription: 'Master software engineering fundamentals beyond coding - maintainability, architecture, testing, and career growth.',
  twitterImage: `${siteUrl}/images/fose_cover_final.jpg`
})

useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'preload', as: 'image', href: '/images/fose_cover_final.jpg', fetchpriority: 'high' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: 'Fundamentals of Software Engineering',
        author: [
          {
            '@type': 'Person',
            name: 'Nathaniel Schutta',
            url: 'https://ntschutta.io'
          },
          {
            '@type': 'Person',
            name: 'Dan Vega',
            url: 'https://www.danvega.dev'
          }
        ],
        publisher: {
          '@type': 'Organization',
          name: "O'Reilly Media"
        },
        description: 'The essential guide to mastering software engineering fundamentals beyond coding. Learn maintainability, architecture, testing, and career growth from industry experts.',
        isbn: '9781098143220',
        image: `${siteUrl}/images/fose_cover_final.jpg`,
        url: siteUrl,
        inLanguage: 'en',
        bookFormat: 'https://schema.org/EBook',
        genre: ['Technology', 'Software Engineering', 'Computer Science'],
        audience: {
          '@type': 'Audience',
          audienceType: 'Software Engineers, Developers, Computer Science Students'
        }
      })
    }
  ]
})
</script>