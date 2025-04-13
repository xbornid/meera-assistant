
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Maaf, tidak ada respon.";

  return new Response(JSON.stringify({ reply }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
