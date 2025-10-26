// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/sitemap'],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Cabinet Grotesk', provider: 'fontshare' },
      { name: 'Satoshi', provider: 'fontshare' }
    ],
    defaults: {
      weights: [400, 500, 700, 800],
      fallbacks: {
        'sans-serif': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial']
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  app: {
    head: {
      title: 'FOSE - Book, Podcast & More',
      meta: [
        { name: 'description', content: 'Explore our book, podcast episodes, and meet the authors behind the content.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en',
        style: 'scroll-behavior: smooth;'
      }
    }
  },

  image: {
    formats: ['webp', 'avif', 'jpeg', 'jpg', 'png'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        }
      },
      // Cache static assets for 1 year
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  },

  sourcemap: {
    server: false,
    client: false
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://fundamentalsofswe.com',
    name: 'Fundamentals of Software Engineering'
  },

  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://fundamentalsofswe.com',
    gzip: true,
    exclude: []
  }
})