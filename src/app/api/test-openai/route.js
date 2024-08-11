import OpenAI from 'openai';

export async function GET(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Ensure you are using the correct model
      messages: [{ role: 'system', content: 'Can you tell me why people fail in two lines.' }],
    });

    console.log("OpenAI API call successful");

    return new Response(JSON.stringify({ response: completion.choices[0].message.content.trim() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('OpenAI API call error:', error);
    return new Response(JSON.stringify({ error: 'API call failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
