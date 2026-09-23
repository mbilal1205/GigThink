// import { detectIntent } from "./intent";
// import { getRelevantKnowledge } from "../knowledge/selector";
// import Groq from "groq-sdk";
// import { verifyUserLimits, incrementUserUsage } from "../../../app/api/guards/check-limits";

// // 🔐 Initialize secure Groq client instance
// const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

// interface ChatMessage {
//   role: "user" | "assistant" | "system";
//   content: string;
// }

// interface AIRequestParams {
//   userId: string;
//   model?: string;
//   prompt: string;
//   systemInstruction?: string;
//   isProposal?: boolean;
//   history?: ChatMessage[];
// }

// /**
//  * 🛰️ TOOL 1: Premium Tavily AI Search for deep industry insights
//  */
// async function fetchTavilyContext(query: string): Promise<string> {
//   try {
//     const apiKey = process.env.TAVILY_API_KEY;
//     if (!apiKey) return "";
//     const response = await fetch("https://api.tavily.com/search", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         api_key: apiKey,
//         query: query,
//         search_depth: "advanced",
//         max_results: 3
//       })
//     });
//     if (!response.ok) return "";
//     const data = await response.json();
//     return (data.results || []).map((res: any) => 
//       `Title: ${res.title}\nContent: ${res.content}\nURL: ${res.url}\n---`
//     ).join("\n");
//   } catch (err) {
//     return "";
//   }
// }

// /**
//  * 🔍 TOOL 2: Serper Google API Search for fast live market data
//  */
// async function fetchSerperContext(query: string): Promise<string> {
//   try {
//     const apiKey = process.env.SERPER_API_KEY;
//     if (!apiKey) return "";
//     const response = await fetch("https://google.serper.dev/search", {
//       method: "POST",
//       headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
//       body: JSON.stringify({ q: query, num: 3 })
//     });
//     if (!response.ok) return "";
//     const data = await response.json();
//     return (data.organic || []).map((res: any) => 
//       `Source: ${res.title}\nSnippet: ${res.snippet}\n---`
//     ).join("\n");
//   } catch (err) {
//     return "";
//   }
// }

// /**
//  * 🧠 TOOL 3: MongoDB User Profile Profile Memory Pull
//  */
// async function getMongoUserBrain(userId: string): Promise<string> {
//   return "User Preference: Elite Full-Stack Developer. Core Stack: Next.js, React Native, Expo, TypeScript, Tailwind CSS, Supabase.";
// }

// /**
//  * ⛓️ Fallback Model Chains config based on Request Type
//  */
// function getTargetModelChain(isProposalIntent: boolean): string[] {
//   const defaultChatChain = ["openai/gpt-oss-120b", "openai/gpt-oss-20b"];
//   const defaultProposalChain = ["llama-3.3-70b-versatile", "openai/gpt-oss-120b"];
//   const rawChainStr = isProposalIntent ? process.env.GROQ_PROPOSAL_CHAIN : process.env.GROQ_CHAT_CHAIN;
//   if (!rawChainStr) return isProposalIntent ? defaultProposalChain : defaultChatChain;
//   return rawChainStr.split(",").map((model) => model.trim());
// }

// /**
//  * 🛰️ Main AI Orchestrator Execution Pipeline
//  */
// export async function generateAIResponse(params: AIRequestParams): Promise<string> {
//   // Extract configuration context variables securely
//   const userId = params.userId;
//   const intent = detectIntent(params.prompt);
//   const knowledgeContext = getRelevantKnowledge(intent);
//   const intentString = typeof intent === "string" ? intent : JSON.stringify(intent);
//   const cleanPrompt = params.prompt.toLowerCase();
  
//   // Decide action type based on intent for rate limiting
//   const isProposalRequest = 
//     params.isProposal === true || 
//     intentString.toLowerCase().includes("proposal") || 
//     cleanPrompt.includes("proposal") ||
//     cleanPrompt.includes("write job post");
    
//   const actionType = isProposalRequest ? "proposal" : "search";

//   // 🛡️ Phase 1: Security Guard & Usage Verification
//   const limitStatus = await verifyUserLimits(userId, actionType);
//   if (!limitStatus.allowed) {
//     throw new Error(`LIMIT_RESTRICTION: ${limitStatus.reason || "Usage limit reached"}`);
//   }

//   // 🧠 Phase 2: Knowledge Graph & Web Search Injection
//   const mongoMemoryContext = await getMongoUserBrain(userId);
//   let dynamicWebContext = "";

//   if (isProposalRequest) {
//     const searchTopic = `${params.prompt} current industry challenges and technology solutions 2026`;
//     dynamicWebContext = await fetchTavilyContext(searchTopic);
//   } else if (cleanPrompt.includes("live market rate") || cleanPrompt.includes("search web for")) {
//     dynamicWebContext = await fetchSerperContext(params.prompt);
//   }

//   // Merge runtime contextual knowledge layers
//   const extendedContext = `
//     [KNOWLEDGE BASE]:
//     ${knowledgeContext}
    
//     [MARKET INSIGHTS]:
//     ${dynamicWebContext}
    
//     [USER TECH PROFILE]:
//     ${mongoMemoryContext}
//   `.trim();

//   // Inject final localized data scope into core task
//   const finalPrompt = `
//     Context:
//     ${extendedContext}

//     Task:
//     ${params.prompt}
//   `.trim();

//   const messagesPayload: ChatMessage[] = [
//     { role: "system", content: params.systemInstruction || "You are GigThink AI, an expert AI Engineer." },
//     ...(params.history || []), 
//     { role: "user", content: finalPrompt }
//   ];

//   const activeChain = getTargetModelChain(isProposalRequest);

//   // 🔄 Phase 3: Resilient LLM Fallback Loop Execution
//   for (const currentModelId of activeChain) {
//     try {
//       const completion = await groqClient.chat.completions.create({
//         model: currentModelId,
//         temperature: isProposalRequest ? 0.45 : 0.70,
//         messages: messagesPayload
//       });

//       let responseText = completion.choices[0]?.message?.content || "";

//       // 🛡️ Phase 4: Bulletproof XML Frontend Sanitization Standard
//       if (responseText.trim() && isProposalRequest) {
//         responseText = responseText
//           .replace(/<proposal>/gi, "<proposal_card>")
//           .replace(/<\/proposal>/gi, "</proposal_card>");

//         responseText = responseText
//           .replace(/<proposal_card>/gi, "___START_PREMIUM_CARD___")
//           .replace(/<\/proposal_card>/gi, "___END_PREMIUM_CARD___");

//         responseText = responseText.replace(/<\/?[^>]+(>|\$)/g, "");

//         responseText = responseText
//           .replace(/___START_PREMIUM_CARD___/g, "<proposal_card>")
//           .replace(/___END_PREMIUM_CARD___/g, "</proposal_card>");

//         responseText = responseText.replace(/```xml/gi, "").replace(/```html/gi, "").replace(/```/gi, "");

//         if (!responseText.includes("<proposal_card>")) {
//           responseText = `<proposal_card>\n${responseText.trim()}\n</proposal_card>`;
//         }
//         responseText = responseText.trim();
//       }

//       if (responseText.trim()) {
//         // 📈 Account allocation increment securely upon success logic
//         await incrementUserUsage(userId, actionType);
//         return responseText;
//       }

//     } catch (error: any) {
//       console.error(`⚠️ Node fallback active. Error on model ${currentModelId}:`, error.message);
//       continue; // Switch to next available model in the array chain configuration
//     }
//   }

//   throw new Error("Terminal routing fault: All models in pipeline completed empty.");
// }















// 📁 File: lib/ai/orchestrator/orchestrator.ts
import { detectIntent } from "./intent";
import { getRelevantKnowledge } from "../knowledge/selector";
import Groq from "groq-sdk";

// 🔐 Initialize secure Groq client instance
const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface AIRequestParams {
  userId: string;
  model?: string;
  prompt: string;
  systemInstruction?: string;
  isProposal?: boolean;
  history?: ChatMessage[];
}

/**
 * 🛰️ TOOL 1: Premium Tavily AI Search for deep industry insights
 */
async function fetchTavilyContext(query: string): Promise<string> {
  try {
    const apiKey = process.env.TAVILY_API_KEY;
    if (!apiKey) return "";
    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query: query,
        search_depth: "advanced",
        max_results: 3
      })
    });
    if (!response.ok) return "";
    const data = await response.json();
    return (data.results || []).map((res: any) => 
      `Title: ${res.title}\nContent: ${res.content}\nURL: ${res.url}\n---`
    ).join("\n");
  } catch (err) {
    return "";
  }
}

/**
 * 🔍 TOOL 2: Serper Google API Search for fast live market data
 */
async function fetchSerperContext(query: string): Promise<string> {
  try {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) return "";
    const response = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, num: 3 })
    });
    if (!response.ok) return "";
    const data = await response.json();
    return (data.organic || []).map((res: any) => 
      `Source: ${res.title}\nSnippet: ${res.snippet}\n---`
    ).join("\n");
  } catch (err) {
    return "";
  }
}

/**
 * 🧠 TOOL 3: Mock User Profile Memory Pull (Stateless Demo)
 */
async function getMongoUserBrain(userId: string): Promise<string> {
  return "User Preference: Elite Full-Stack Developer. Core Stack: Next.js, React Native, Expo, TypeScript, Tailwind CSS, Supabase.";
}

/**
 * ⛓️ Fallback Model Chains config based on Request Type
 */
function getTargetModelChain(isProposalIntent: boolean): string[] {
  const defaultChatChain = ["openai/gpt-oss-120b", "openai/gpt-oss-20b"];
  const defaultProposalChain = ["llama-3.3-70b-versatile", "openai/gpt-oss-120b"];
  const rawChainStr = isProposalIntent ? process.env.GROQ_PROPOSAL_CHAIN : process.env.GROQ_CHAT_CHAIN;
  if (!rawChainStr) return isProposalIntent ? defaultProposalChain : defaultChatChain;
  return rawChainStr.split(",").map((model) => model.trim());
}

/**
 * 🛰️ Main AI Orchestrator Execution Pipeline
 */
export async function generateAIResponse(params: AIRequestParams): Promise<string> {
  const userId = params.userId;
  const intent = detectIntent(params.prompt);
  const knowledgeContext = getRelevantKnowledge(intent);
  const intentString = typeof intent === "string" ? intent : JSON.stringify(intent);
  const cleanPrompt = params.prompt.toLowerCase();
  
  const isProposalRequest = 
    params.isProposal === true || 
    intentString.toLowerCase().includes("proposal") || 
    cleanPrompt.includes("proposal") ||
    cleanPrompt.includes("write job post");

  // 🧠 Phase 2: Knowledge Graph & Web Search Injection
  const mongoMemoryContext = await getMongoUserBrain(userId);
  let dynamicWebContext = "";

  if (isProposalRequest) {
    const searchTopic = `${params.prompt} current industry challenges and technology solutions 2026`;
    dynamicWebContext = await fetchTavilyContext(searchTopic);
  } else if (cleanPrompt.includes("live market rate") || cleanPrompt.includes("search web for")) {
    dynamicWebContext = await fetchSerperContext(params.prompt);
  }

  // Merge runtime contextual knowledge layers
  const extendedContext = `
    [KNOWLEDGE BASE]:
    ${knowledgeContext}
    
    [MARKET INSIGHTS]:
    ${dynamicWebContext}
    
    [USER TECH PROFILE]:
    ${mongoMemoryContext}
  `.trim();

  // Inject final localized data scope into core task
  const finalPrompt = `
    Context:
    ${extendedContext}

    Task:
    ${params.prompt}
  `.trim();

  // Strict instructions to prevent AI from putting ugly XML tags in text
  const baseSystemInstruction = params.systemInstruction || "You are GigThink AI, an expert AI Engineer and Freelance Mentor.";
  const enforcementInstruction = isProposalRequest
    ? `${baseSystemInstruction}\nCRITICAL: Write a direct, highly-converting professional freelance proposal. Do NOT output any XML tags, HTML tags, or wrapper tags like <proposal_card>. Just write the clean proposal text.`
    : baseSystemInstruction;

  const messagesPayload: ChatMessage[] = [
    { role: "system", content: enforcementInstruction },
    ...(params.history || []), 
    { role: "user", content: finalPrompt }
  ];

  const activeChain = getTargetModelChain(isProposalRequest);

  // 🔄 Phase 3: Resilient LLM Fallback Loop Execution
  for (const currentModelId of activeChain) {
    try {
      const completion = await groqClient.chat.completions.create({
        model: currentModelId,
        temperature: isProposalRequest ? 0.45 : 0.70,
        messages: messagesPayload
      });

      let responseText = completion.choices[0]?.message?.content || "";

      // Clean any accidental code blocks or tags if AI misbehaves
      if (responseText.trim()) {
        responseText = responseText
          .replace(/<\/?proposal_card>/gi, "")
          .replace(/<\/?proposal>/gi, "")
          .replace(/```markdown/gi, "")
          .replace(/```/gi, "")
          .trim();

        return responseText;
      }

    } catch (error: any) {
      console.error(`⚠️ Node fallback active. Error on model ${currentModelId}:`, error.message);
      continue; // Switch to next available model in the array chain configuration
    }
  }

  throw new Error("Terminal routing fault: All models in pipeline completed empty.");
}