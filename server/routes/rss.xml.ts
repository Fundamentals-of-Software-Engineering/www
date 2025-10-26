export default defineEventHandler((event) => {
  // Define episodes inline since server routes can't easily import from app
  const episodes = [
    {
      id: 0,
      title: '00: Hello, Fundamentals of SWE',
      published: new Date('2025-11-01'),
      description: 'Welcome to our first episode where we discuss the origins of this podcast and what you can expect.',
      audioUrl: 'https://fundamentalsofswe.com/podcasts/ES_Haunted Playhouse - Stationary Sign.mp3'
    }
  ]
  const siteUrl = 'https://fundamentalsofswe.com'

  const rssItems = episodes
    .sort((a, b) => b.published.getTime() - a.published.getTime())
    .map((episode) => {
      return `
    <item>
      <title><![CDATA[${episode.title}]]></title>
      <description><![CDATA[${episode.description}]]></description>
      <link>${siteUrl}/podcast/${episode.id}</link>
      <guid isPermaLink="true">${siteUrl}/podcast/${episode.id}</guid>
      <pubDate>${episode.published.toUTCString()}</pubDate>
      ${episode.audioUrl ? `<enclosure url="${episode.audioUrl}" type="audio/mpeg" />` : ''}
    </item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>FOSE Podcast - Fundamentals of Software Engineering</title>
    <link>${siteUrl}/podcast</link>
    <description>Learn software engineering fundamentals beyond coding. Weekly episodes featuring expert insights on maintainability, architecture, testing, and career growth from Nate Schutta and Dan Vega.</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Fundamentals of Software Engineering</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${siteUrl}/images/poster.jpg</url>
      <title>FOSE Podcast</title>
      <link>${siteUrl}/podcast</link>
    </image>
    <itunes:author>Nate Schutta and Dan Vega</itunes:author>
    <itunes:summary>Learn software engineering fundamentals beyond coding with weekly podcast episodes.</itunes:summary>
    <itunes:image href="${siteUrl}/images/poster.jpg" />
    <itunes:category text="Technology">
      <itunes:category text="Tech News"/>
    </itunes:category>
    <itunes:explicit>no</itunes:explicit>
${rssItems}
  </channel>
</rss>`

  setResponseHeader(event, 'Content-Type', 'application/xml')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=3600')

  return rss
})
