export const authors = [
  {
    slug: 'nathaniel-schutta',
    name: 'Nathaniel Schutta',
    role: 'Architect & Author',
    bio: "is a software architect and Java Champion focused on cloud computing, developer happiness and building usable applications. A proponent of polyglot programming, Nate has written multiple books, appeared in countless videos and many podcasts. He’s also a seasoned speaker who regularly presents at worldwide conferences, meetups, universities, and user groups. In addition to his day job, Nate is an adjunct professor at the University of Minnesota, where he teaches students to embrace (and evaluate) technical change. Driven to rid the world of bad presentations, he coauthored the book Presentation Patterns with Neal Ford and Matthew McCullough, and he also published Thinking Architecturally and Responsible Microservices available from O’Reilly. His latest book, Fundamentals of Software Engineering, is now available.",
    image: '/images/avatars/nateschutta.jpg',
    twitter: 'https://twitter.com/ntschutta',
    bluesky: 'https://bsky.app/profile/nts.bsky.social',
    linkedin: 'https://www.linkedin.com/in/ntschutta',
    website: 'https://ntschutta.io',
    projects: [
      {
        name: 'Fundamentals of Software Engineering',
        description: 'A comprehensive guide for aspiring engineers',
        link: '/'
      }
    ]
  },
  {
    slug: 'dan-vega',
    name: 'Dan Vega',
    role: 'Developer Advocate & Author',
    bio: "A Spring Developer Advocate at Broadcom and Java Champion, has over 20 years of software development experience. A passionate problem-solver, he actively shares knowledge as a blogger, YouTuber, course creator, and speaker, inspiring fellow developers through continuous learning.",
    image: '/images/avatars/danvega.png',
    twitter: 'https://twitter.com/therealdanvega',
    bluesky: 'https://bsky.app/profile/danvega.dev',
    linkedin: 'https://www.linkedin.com/in/danvega',
    website: 'https://www.danvega.dev',
    youtube: 'https://www.youtube.com/@DanVega',
    github: 'https://github.com/danvega',
    projects: [
      {
        name: 'Fundamentals of Software Engineering',
        description: 'A comprehensive guide for aspiring engineers',
        link: '/'
      }
    ]
  }
]

export function getAllAuthors() {
  return authors
}

export function getAuthorBySlug(slug) {
  return authors.find(author => author.slug === slug)
}
