export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const perPage = Number(query.perPage) || 100

  const response = await fetchEpisodes(event, { page, perPage })

  return {
    episodes: response.data.map((ep) => ({
      id: ep.id,
      slug: cleanSlug(ep.attributes.slug),
      episodeNumber: ep.attributes.number,
      title: ep.attributes.title,
      summary: ep.attributes.summary,
      description: stripYouTubeTimestamps(ep.attributes.description),
      publishedAt: ep.attributes.published_at,
      formattedDate: ep.attributes.formatted_published_at,
      duration: ep.attributes.duration,
      durationFormatted: formatDuration(ep.attributes.duration),
      audioUrl: ep.attributes.media_url,
      imageUrl: ep.attributes.image_url,
      videoId: extractYouTubeVideoId(ep.attributes.video_url),
    })),
    meta: response.meta,
  }
})
