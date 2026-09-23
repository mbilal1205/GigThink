// // 📁 File: app/api/proposal/generate/route.ts
// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db/mongodb"; // 🛠️ Typo fixed: monogdb -> mongodb
// import { createSupabaseServerClient } from "@/utils/supabase/server"; // Strict Server Client
// import { generateAIResponse } from "@/lib/ai/orchestrator/orchestrator";
// import { generateRawProposal } from "@/app/api/proposal/pipeline/proposalGenerator";
// import { reviewAndPolish } from "@/app/api/proposal/pipeline/antiAiReviewer";

// export async function POST(request: Request) {
//   try {
//     // 1️⃣ STRICT AUTHENTICATION (Server Client call)
//     const supabase = await createSupabaseServerClient(); 
//     const { data: { user }, error: authError } = await supabase.auth.getUser();

//     if (authError || !user) {
//       return NextResponse.json(
//         { success: false, error: "Unauthorized. Please log in to use GigThink AI." }, 
//         { status: 401 }
//       );
//     }

//     const authenticUserId = user.id; // 100% authentic ID
    
//     // 🛡️ Safely parse body to prevent server crash on bad requests
//     let body;
//     try {
//       body = await request.json();
//     } catch (err) {
//       return NextResponse.json({ success: false, error: "Invalid request payload!" }, { status: 400 });
//     }

//     const userPrompt = body.message || body.prompt || "";
//     const { forceProposal, modelId = "llama-3.3-70b-versatile" } = body;
//     let currentConversationId = body.conversationId;

//     // 🛠️ Moved log here (Pehle yeh return ke baad tha, jo unreachable hota hai)
//     console.log(`🔍 RECEIVED CONVERSATION ID: ${currentConversationId || "NEW CHAT"}`);

//     if (!userPrompt.trim()) {
//       return NextResponse.json({ success: false, error: "Prompt is required!" }, { status: 400 });
//     }

//     // 2️⃣ MONGODB CONNECTION
//     const { db } = await connectToDatabase();
//     if (!db) throw new Error("Database connection failed. Please try again.");

//     let isNewChatCreated = false;

//     // Handle Conversation ID (MongoDB Logic)
//     if (!currentConversationId || currentConversationId.startsWith("new-")) {
//       currentConversationId = crypto.randomUUID();
//       isNewChatCreated = true;
      
//       // Save new conversation context to MongoDB
//       await db.collection("conversations").insertOne({
//         _id: currentConversationId,
//         user_id: authenticUserId,
//         title: userPrompt.substring(0, 30) + "...",
//         created_at: new Date()
//       });
//     }

//     // 🧠 AI MEMORY RETRIEVAL: MongoDB se purani chat history fetch karein
//     console.log(`🧠 [MONGODB MEMORY] Fetching past history for conversation: ${currentConversationId}`);
//     const pastMessages = await db.collection("messages")
//       .find({ conversation_id: currentConversationId })
//       .sort({ created_at: 1 }) // Chronological order (Purane pehle, naye baad mein)
//       .toArray();

//     // 🚨 FIXED TYPESCRIPT ERROR: Added strict mapping type assertion for 'role'
//     const chatHistory = pastMessages.map((msg: any) => ({
//       role: (msg.sender === "user" ? "user" : "assistant") as "user" | "assistant" | "system",
//       content: msg.content
//     }));

//     let finalResponseContent = "";

//     // =========================================================
//     // EXECUTION PIPELINES
//     // =========================================================
//     if (forceProposal) {
//       console.log("🎯 GIGTHINK OVERRIDE: Heavy Proposal Mode");
//       const dynamicStructuralPlan = `Analyze the request: "${userPrompt}". Structure an elite proposal.`;
      
//       const rawProposal = await generateRawProposal(userPrompt, dynamicStructuralPlan, modelId, authenticUserId);
//       finalResponseContent = await reviewAndPolish(rawProposal, modelId, authenticUserId);
//     } else {
//       console.log("🎯 GIGTHINK DEFAULT: Casual Conversation Mode");
      
//       // Fetch user's custom brain profile from MongoDB to make AI highly personalized
//       const userBrain = await db.collection("user_brains").findOne({ user_id: authenticUserId });
//       const personaInfo = userBrain 
//         ? `User's Name is ${userBrain.name || 'Freelancer'}. Core Skills: ${userBrain.skills?.join(', ')}. Keep answers tailored to their skills.` 
//         : `Treat the user with immense professional respect. Ask about their skills if needed.`;

//       const chatInstruction = `
//         You are GigThink AI, an elite Freelance Mentor. 
//         ${personaInfo}
//         CRITICAL RULES:
//         1. Match the user's energy in professional English/Roman Urdu mix if they prefer.
//         2. Keep it crisp, no boring long intros. Provide high-value insights.
//       `.trim();

//       // 🔄 Injected `history` parameter into the orchestrator
//       finalResponseContent = await generateAIResponse({
//         userId: authenticUserId, 
//         model: modelId,
//         prompt: userPrompt,
//         systemInstruction: chatInstruction,
//         history: chatHistory // 🧠 Context memory sent to engine
//       });
//     }

//     // 3️⃣ SAVE MESSAGES STRICTLY TO MONGODB
//     console.log("💾 Saving messages to MongoDB...");
//     const aiMessageId = crypto.randomUUID();
    
//     // ⚡ Fast Insert: Isko await karna zaroori hai taake data miss na ho
//     await db.collection("messages").insertMany([
//       { 
//         conversation_id: currentConversationId, 
//         user_id: authenticUserId, 
//         sender: "user", 
//         content: userPrompt, 
//         created_at: new Date() 
//       },
//       { 
//         id: aiMessageId,
//         conversation_id: currentConversationId, 
//         user_id: authenticUserId, 
//         sender: "ai", 
//         content: finalResponseContent, 
//         created_at: new Date() 
//       }
//     ]);

//     // Send successful response to frontend
//     return NextResponse.json({
//       success: true,
//       conversationId: currentConversationId,
//       isNewChatCreated,
//       message: { id: aiMessageId, sender: "ai", content: finalResponseContent }
//     });

//   } catch (error: any) {
//     console.error("🚨 Final Route Error:", error);
//     return NextResponse.json(
//       { success: false, error: error.message || "Internal Server Error" }, 
//       { status: 500 }
//     );
//   }
// }






// 📁 File: app/api/proposal/generate/route.ts
import { NextResponse } from "next/server";
import { generateAIResponse } from "@/lib/ai/orchestrator/orchestrator";
import { generateRawProposal } from "@/app/api/proposal/pipeline/proposalGenerator";
import { reviewAndPolish } from "@/app/api/proposal/pipeline/antiAiReviewer";

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (err) {
      return NextResponse.json({ success: false, error: "Invalid request payload!" }, { status: 400 });
    }

    // Support both frontend keys: jobDescription, message, or prompt
    const userPrompt = body.jobDescription || body.message || body.prompt || "";
    const { modelId = "llama-3.3-70b-versatile" } = body;

    if (!userPrompt.trim()) {
      return NextResponse.json({ success: false, error: "Prompt/Job description is required!" }, { status: 400 });
    }

    console.log(`🚀 DEMO MODE: Generating proposal response...`);

    let finalResponseContent = "";
    const dummyUserId = "demo-user";

    // Since this is the proposal generator, execute the proposal pipeline directly
    const dynamicStructuralPlan = `Analyze the job description: "${userPrompt}". Structure an elite high-converting freelance proposal.`;
    
    const rawProposal = await generateRawProposal(userPrompt, dynamicStructuralPlan, modelId, dummyUserId);
    finalResponseContent = await reviewAndPolish(rawProposal, modelId, dummyUserId);

    // Send the response structure that matches your frontend fallback expectations
    return NextResponse.json({
      success: true,
      proposal: finalResponseContent,
      message: { 
        id: crypto.randomUUID(), 
        sender: "ai", 
        content: finalResponseContent 
      }
    });

  } catch (error: any) {
    console.error("🚨 Final Route Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}