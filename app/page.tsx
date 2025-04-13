
"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <main style={{ padding: 32, fontFamily: "Arial, sans-serif" }}>
      <h1>Meera Assistant</h1>
      <textarea
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: "100%", padding: 8 }}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Ask GPT"}
      </button>
      <pre style={{ marginTop: 20, background: "#f0f0f0", padding: 16 }}>
        {response}
      </pre>
    </main>
  );
}
