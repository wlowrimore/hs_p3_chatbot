import { NextRequest, NextResponse } from "next/server";
import { RetrievalQA } from "@langchain/retrievers";
import { JSONFile } from "@langchain/document_loaders";
import { Document } from "@langchain/schema";
import OpenAI from "openai"; 

type QA_PAIR = {
  query: string;
  response: string;
};

type FAQ_CATEGORY = {
  category: string;
  qa_pairs: QA_PAIR[];
};

type CustomerServiceFAQs = {
  customer_service_faqs: FAQ_CATEGORY[];
};

// Load the FAQ data from the JSON file
const loadFAQs = async () => {
  const loader = new JSONFile("./data/json/faq.json"); 
  const documents = await loader.load();
  return documents;
};

// Create a new OpenAI client instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Load FAQ data
    const faqs = await loadFAQs();

    // Initialize RetrievalQA with the loaded FAQs
    const retriever = new RetrievalQA({
      llm: openai,
      documents: faqs.flatMap((category) =>
        category.qa_pairs.map((pair) => 
          new Document({
            content: pair.response,
            metadata: { query: pair.query, category: category.category }, // Add metadata if needed
          })
        )
      ),
    });

    // Make the call to OpenAI using the new client
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: messages,     // Pass the messages array to OpenAI
    });

    // Get the response based on the user's prompt
    const assistantMessage = await retriever.query(messages[messages.length - 1].content);

    // Return both OpenAI response and FAQ-based response if needed
    return NextResponse.json({ 
      message: assistantMessage, 
      openaiResponse: response.choices[0].message.content // Include OpenAI response
    });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      { message: "Sorry, something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
