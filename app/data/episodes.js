export const episodes = [
  {
    id: 0,
    title: '00: Hello, Fundamentals of SWE',
    published: new Date('2025-11-01'),
    description: 'Welcome to our first episode where we discuss the origins of this podcast and what you can expect.',
    content: `
      <h2>Coming Soon!</h2>
      <p>This is the first episode of our podcast series.</p>
      <h2>What to Expect</h2>
      <ul>
        <li>Weekly episodes</li>
        <li>Expert interviews</li>
        <li>Deep dives into topics</li>
      </ul>
    `,
    audio: {
      src: '/podcasts/ES_Haunted Playhouse - Stationary Sign.mp3',
      type: 'audio/mpeg'
    },
    audioUrl: '/podcasts/ES_Haunted Playhouse - Stationary Sign.mp3',
    videoId: 'dQw4w9WgXcQ' // Example YouTube ID
  }
]

export function getAllEpisodes() {
  return episodes
}

export function getEpisodeById(id) {
  return episodes.find(ep => ep.id.toString() === id.toString())
}
