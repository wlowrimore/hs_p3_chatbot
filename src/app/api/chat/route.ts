import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Create a new OpenAI client instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This should be set in your environment variables
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Make the call to OpenAI using the new client
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // You can use a different model if needed
      messages: messages, // Pass the messages array to OpenAI
    });

    // Extract the assistant's reply from the response
    const assistantMessage = response.choices[0]?.message?.content;

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      { message: "Sorry, something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
