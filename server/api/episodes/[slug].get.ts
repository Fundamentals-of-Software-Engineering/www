export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Episode slug is required',
    })
  }

  const episode = await fetchEpisodeBySlug(event, slug)

  if (!episode) {
    throw createError({
      statusCode: 404,
      message: 'Episode not found',
    })
  }

  return {
    id: episode.id,
    slug: cleanSlug(episode.attributes.slug),
    episodeNumber: episode.attributes.number,
    title: episode.attributes.title,
    summary: episode.attributes.summary,
    description: stripYouTubeTimestamps(episode.attributes.description),
    publishedAt: episode.attributes.published_at,
    formattedDate: episode.attributes.formatted_published_at,
    duration: episode.attributes.duration,
    durationFormatted: formatDuration(episode.attributes.duration),
    audioUrl: episode.attributes.media_url,
    imageUrl: episode.attributes.image_url,
    videoId: extractYouTubeVideoId(episode.attributes.video_url),
  }
})
