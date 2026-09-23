import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { codearnData } from "@/lib/data/codearn-data"; // Path check kar lena
import { gigthinkData } from "@/lib/data/gigthink-data"; // Path check kar lena

// Native Ultra-Fast Groq Instance
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
  try {
    // 1. Extract Chat Payload
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // 🎯 2. Advanced Prompting Layer (Dynamically Injected with Full Deep Data)
 // 🎯 2. Advanced Prompting Layer (Dynamically Injected with Full Deep Data)
// 🎯 2. Advanced Prompting Layer (Dynamically Injected with Full Deep Data)
    const systemPrompt = `You are the official and highly intelligent smart assistant for '${gigthinkData.name}', proudly developed by its parent company, '${codearnData.name}'.

ABOUT ${gigthinkData.name}:
- **Tagline**: ${gigthinkData.tagline}
- **Overview**: ${gigthinkData.description}
- **Core Features**:
  ${gigthinkData.coreFeatures.map((f) => `- ${f.title}: ${f.detail}`).join("\n  ")}
- **Job Sources**: ${gigthinkData.jobSources.join(", ")}
- **Platform Stats**: ${gigthinkData.platformStats.join(", ")}

ABOUT ${codearnData.name} (${codearnData.type}):
- **Location & Contact**: Located in ${codearnData.location}. Contact: ${codearnData.contact}
- **Founder**: ${codearnData.founder.name} (${codearnData.founder.title}). Background: ${codearnData.founder.background} Philosophy: ${codearnData.founder.philosophy}
- **Services Offered**:
  ${codearnData.services.map((s) => `- ${s.name}: ${s.description}`).join("\n  ")}
- **CodEarn Academy & Training**: ${codearnData.academy.methodology}
  Curriculum: ${codearnData.academy.curriculum.join(" | ")}
  Placement: ${codearnData.academy.outcomes.placementRate} placement rate with salaries averaging ${codearnData.academy.outcomes.averageSalary}.
- **Proven Impact / Case Studies**:
  ${codearnData.provenImpact.map((p) => `- ${p.client} (${p.industry}): ${p.result}`).join("\n  ")}
- **Our Guarantees**:
  ${codearnData.guarantees.map((g) => `- ${g}`).join("\n  ")}

YOUR STRICT DIRECTIVES (CRITICAL RULES):
1. **ZERO HINDI TOLERANCE POLICY:** Hargiz Hindi bhasha ya Devanagari script/words use nahi karne hain ([sthit, sthapit, prabhavi, sahayog, madhyam, aadharit, seekhaya] are strictly BANNED).
2. **STRICT ROMAN URDU / ENGLISH ONLY:** Sirf aam bolchal ki natural **Roman Urdu** ya **English** use karni hai (jaise Pakistani developers baat karte hain).
3. Scope Restriction: Sirf ${gigthinkData.name}, ${codearnData.name}, founder Muhammad Bilal sahab, academy, freelance jobs, aur AI proposals ke bare mein baat karein.
4. OUT OF SCOPE RULE: Domain se bahar ke sawal par sakhti se mana kar dein.
5. REFUSAL SCRIPT: "Main exclusively ${codearnData.name} ka banaya hua assistant hoon ${gigthinkData.name} ke liye. Mujhe sirf hamari platform aur freelance leads ke bare mein baat karne ki ijazat hai!"
6. NEVER break character. Groq, OpenAI, Llama ya kisi bhi underlying AI ka zikar mat karein.
7. **CONCISENESS RULE (CRITICAL):** Lambi aur fazool paragraphs bilkul nahi likhne. Hamesha **short, crisp, aur to-the-point** jawab dena hai jo 3 se 4 line ya short bullet points tak محدود ho. Professional aur smart andaz rakhein.
8. Max tokens limit ko dhyan mein rakhte hue hamesha brief aur direct formatting use karein.`;

    // ⚡ 3. History Slice: Max 10 recent messages for context
    const recentHistory = messages.slice(-10);

    const groqMessages: Groq.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
      ...recentHistory.map((m: any) => ({
        role: m.role as "user" | "assistant" | "system",
        content: typeof m.content === "string" ? m.content : "",
      })),
    ];

    // ⚡ 4. Direct Call to Native Groq (openai/gpt-oss-120b for hyper-speed)
    const completionStream = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: groqMessages,
      temperature: 0.1, // Strict adherence to instructions
      max_tokens: 1000,
      stream: true,
    });

    const encoder = new TextEncoder();

    // 5. Clean Direct Stream Bridge
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completionStream) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    // Instant Response Stream Headers
    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: any) {
    console.error("[ABOUT_STREAM_ERROR]:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}