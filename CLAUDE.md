# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 marketing website for "Fundamentals of Software Engineering" (FOSE) - a book by Nathaniel Schutta and Dan Vega published by O'Reilly Media. The site features book information, a podcast section with audio playback, author profiles, and testimonials.

**Site URL**: https://fundamentalsofswe.com

## Common Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000

# Production
npm run build            # Build for production
npm run preview          # Preview production build
npm run generate         # Generate static site

# Post-install
npm run postinstall      # Prepare Nuxt (runs automatically after npm install)
```

## Architecture

### Tech Stack
- **Framework**: Nuxt 4 (Vue 3)
- **State Management**: Pinia (composition API style)
- **Styling**: Tailwind CSS with custom fonts (Cabinet Grotesk, Satoshi)
- **Image Optimization**: @nuxt/image
- **SEO**: @nuxtjs/sitemap, structured data (JSON-LD)

### Directory Structure

```
app/
├── components/        # Vue components (auto-imported)
├── composables/       # Vue composables like useWebVitals
├── data/             # Static data files (authors.js, episodes.js)
├── layouts/          # Layout wrappers (default.vue, podcast.vue)
├── pages/            # File-based routing
│   ├── index.vue     # Homepage
│   ├── authors/      # Author profiles
│   └── podcast/      # Podcast listing and episode pages
├── stores/           # Pinia stores (audio.js)
└── app.vue           # Root app component

server/
└── routes/           # Server routes (rss.xml.ts)

public/               # Static assets
└── images/           # Book covers, avatars, etc.
```

### Key Architectural Patterns

#### Audio Playback System
The podcast audio player is built with a centralized Pinia store pattern:

- **Audio Store** (`app/stores/audio.js`): Manages playback state (currentEpisode, isPlaying, currentTime, duration)
- **AudioProvider** (`app/components/AudioProvider.vue`): Wraps the app, creates hidden audio element, syncs browser audio events with store
- **AudioPlayer** (`app/components/AudioPlayer.vue`): Fixed player UI that reads from store, displays when episode is loaded
- **Podcast Pages**: Trigger playback via `audioStore.toggle(episode)`

The audio element is shared globally - only one audio element exists, managed by the store.

#### Data Management
Static data is defined in plain JavaScript files:

- `app/data/authors.js`: Author profiles with social links
- `app/data/episodes.js`: Podcast episodes with metadata

**Important**: Episode data is duplicated in `server/routes/rss.xml.ts` because server routes cannot easily import from the `app/` directory. When adding episodes, update both files.

#### Layouts
Two layouts exist:
- `default.vue`: Used for homepage, authors page
- `podcast.vue`: Used for podcast pages (includes AudioProvider wrapper)

Specify layout with `definePageMeta({ layout: 'podcast' })` in page components.

#### SEO Implementation
Each page uses Nuxt's `useSeoMeta()` and `useHead()` composables for:
- Open Graph tags
- Twitter Card metadata
- Structured data (JSON-LD) for books and organizations
- Canonical URLs
- Preloading critical images

The homepage includes comprehensive Book schema markup.

### Styling Conventions

- Custom fonts: `font-display` (Cabinet Grotesk), `font-sans` (Satoshi)
- Custom rounded corners: `rounded-4xl`, `rounded-5xl`, `rounded-6xl`
- Tailwind Typography plugin enabled for prose content
- Container component used for max-width constraints

### RSS Feed
The RSS feed at `/rss.xml` is server-rendered via `server/routes/rss.xml.ts`. It includes iTunes podcast tags and enclosure elements for audio files.

## Adding Content

### Adding a New Episode
1. Add episode object to `app/data/episodes.js`
2. **Also update** the episodes array in `server/routes/rss.xml.ts` (required for RSS feed)
3. Episode properties: `id`, `title`, `published` (Date), `description`, `content` (HTML), `audioUrl`, `videoId` (optional)

### Adding a New Author
1. Update `app/data/authors.js` with author object
2. Properties: `slug`, `name`, `role`, `bio`, `image`, social links (`twitter`, `bluesky`, `linkedin`, `youtube`, `github`, `website`)

## Configuration

### Site URL
Set via environment variable `NUXT_PUBLIC_SITE_URL` or defaults to `https://fundamentalsofswe.com` in `nuxt.config.ts`

### Security Headers
Configured in `nuxt.config.ts` under `nitro.routeRules` with strict CSP-style headers.

### Image Optimization
Images are served via @nuxt/image with automatic format conversion (webp, avif) and responsive sizing.

## Important Notes

- All components in `app/components/` are auto-imported (no need for explicit imports)
- Composables in `app/composables/` are auto-imported
- The site uses smooth scrolling (`scroll-behavior: smooth` in html attrs)
- Page layouts wrap content automatically - don't add duplicate headers/footers in page components
