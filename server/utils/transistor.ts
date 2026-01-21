import type { H3Event } from 'h3'

export interface TransistorEpisode {
  id: string
  type: string
  attributes: {
    title: string
    number: number
    season: number
    status: string
    published_at: string
    duration: number
    duration_in_mmss: string
    summary: string
    description: string
    media_url: string
    image_url: string
    share_url: string
    embed_html: string
    embed_html_dark: string
    transcript_url: string | null
    video_url: string | null
    formatted_published_at: string
    slug: string
  }
}

export interface TransistorResponse {
  data: TransistorEpisode[]
  meta: {
    currentPage: number
    totalPages: number
    totalCount: number
  }
}

const TRANSISTOR_API_BASE = 'https://api.transistor.fm/v1'

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  return `${minutes}m ${secs}s`
}

export function cleanSlug(slug: string): string {
  // Remove episode number prefix like "e01-", "e02-", "ep01-", "ep1-", etc.
  return slug.replace(/^e(p)?0*\d+-/i, '')
}

export function stripYouTubeTimestamps(html: string): string {
  if (!html) return ''

  // Remove entire "Timestamps" section and everything after it
  // Matches headers like "Timestamps:", "## Timestamps", "<h2>Timestamps</h2>", etc.
  return html
    .replace(/<h[1-6][^>]*>\s*Timestamps?\s*:?\s*<\/h[1-6]>[\s\S]*$/i, '')
    .replace(/<p><strong>\s*Timestamps?\s*:?\s*<\/strong><\/p>[\s\S]*$/i, '')
    .replace(/<p>\s*<strong>\s*Timestamps?\s*:?\s*<\/strong>[\s\S]*$/i, '')
    .replace(/<strong>\s*Timestamps?\s*:?\s*<\/strong>[\s\S]*$/i, '')
    .replace(/<p>\s*Timestamps?\s*:?\s*<\/p>[\s\S]*$/i, '')
    .replace(/Timestamps?\s*:\s*[\s\S]*$/i, '')
    .trim()
}

export function extractYouTubeVideoId(url: string | null): string | null {
  if (!url) return null

  // Match various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/, // Already just an ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return match[1]
    }
  }

  return null
}

export async function getTransistorApiKey(event: H3Event): Promise<string> {
  const config = useRuntimeConfig(event)
  const apiKey = config.transistorApiKey
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      message: 'Transistor API key not configured',
    })
  }
  return apiKey
}

export async function getTransistorShowId(event: H3Event): Promise<string> {
  const config = useRuntimeConfig(event)
  const showId = config.transistorShowId
  if (!showId) {
    throw createError({
      statusCode: 500,
      message: 'Transistor Show ID not configured',
    })
  }
  return showId
}

export async function fetchEpisodes(
  event: H3Event,
  options: { page?: number; perPage?: number } = {}
): Promise<TransistorResponse> {
  const apiKey = await getTransistorApiKey(event)
  const showId = await getTransistorShowId(event)
  const { page = 1, perPage = 10 } = options

  const response = await $fetch<TransistorResponse>(
    `${TRANSISTOR_API_BASE}/episodes`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      query: {
        show_id: showId,
        'pagination[page]': page,
        'pagination[per]': perPage,
        status: 'published',
      },
    }
  )

  return response
}

export async function fetchEpisodeBySlug(
  event: H3Event,
  slug: string
): Promise<TransistorEpisode | null> {
  const apiKey = await getTransistorApiKey(event)
  const showId = await getTransistorShowId(event)

  // Fetch all episodes to find by slug (Transistor doesn't have slug endpoint)
  const response = await $fetch<TransistorResponse>(
    `${TRANSISTOR_API_BASE}/episodes`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      query: {
        show_id: showId,
        'pagination[page]': 1,
        'pagination[per]': 100,
        status: 'published',
      },
    }
  )

  // Match by cleaned slug (without episode number prefix)
  const episode = response.data.find((ep) => cleanSlug(ep.attributes.slug) === slug)
  if (!episode) return null

  // Fetch full episode details to get all attributes
  return await fetchEpisodeById(event, episode.id)
}

export async function fetchEpisodeById(
  event: H3Event,
  id: string
): Promise<TransistorEpisode | null> {
  const apiKey = await getTransistorApiKey(event)

  try {
    const response = await $fetch<{ data: TransistorEpisode }>(
      `${TRANSISTOR_API_BASE}/episodes/${id}`,
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    )
    return response.data
  } catch {
    return null
  }
}
