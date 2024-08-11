// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { messages } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    })

    const assistantMessage = completion.choices[0].message.content

    res.status(200).json({ message: assistantMessage })
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    res.status(500).json({ message: 'Error processing your request' })
  }
}