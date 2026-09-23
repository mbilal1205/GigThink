import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

export async function callGroqAPI(
  model: string,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  try {
    const response = await groq.chat.completions.create({
      model: model,
      temperature: 0.7,
      messages: [
        { role: "system", content: systemPrompt.trim() },
        { role: "user", content: userPrompt.trim() },
      ],
    });

    const aiOutput = response.choices[0]?.message?.content || "";

    // 🛡️ Bulletproof Cleaning Logic
    // 1. Remove all instances of the literal word "undefined" (case-insensitive)
    // 2. Remove trailing "undefined" if it got stuck at the end
    // 3. Normalize multiple newlines into clean paragraphs
    let finalCleanText = aiOutput
      .replace(/undefined/gi, "")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();

    return finalCleanText;

    console.log("========== GROQ OUTPUT ==========", finalCleanText);
  } catch (error) {
    console.error("Groq API Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}