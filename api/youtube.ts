import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCDPzs8dW216jEMvuoQsVV3w'
    )

    const text = await response.text()

    res.setHeader('Content-Type', 'application/xml')
    // Lisa cache, et mitte iga kord uuesti YouTube'i pihta minna
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).send(text)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch YouTube feed' })
  }
}
