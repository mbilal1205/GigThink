// app/api/proposal/pipeline/proposalPlanner.ts
import { generateAIResponse } from "@/lib/ai/orchestrator/orchestrator";

/**
 * Plans a proposal by analyzing the raw job post and extracting
 * pain points, tech stack recommendations, and strategic milestones.
 *
 * @param userInput - The raw job post / client brief provided by the user.
 * @param userId    - Authenticated user ID (required for AI quota & audit tracking).
 * @param model     - AI model identifier. Defaults to "gemini-2.0-flash".
 * @returns The analytical proposal plan as a string.
 * @throws Error if userId is missing or AI response fails.
 */
export async function planProposal(
  userInput: string,
  userId: string,
  model: string = "gemini-2.0-flash"
): Promise<string> {
  // --- Input validation (fail fast, before hitting AI layer) ---
  if (!userId?.trim()) {
    throw new Error("[planProposal] `userId` is required for AI request tracking.");
  }
  if (!userInput?.trim()) {
    throw new Error("[planProposal] `userInput` cannot be empty.");
  }

  const plannerInstruction = `
    You are an elite Tech Agency Business Analyst. Analyze the raw job post provided by the user.
    Extract and list out:
    1. The True Pain Point (What keeps the client awake at night? Missing deadlines? Bad code quality? Low conversions?).
    2. Recommended Technical Stack and Architecture adjustments.
    3. Strategic execution milestones tailored exactly to their problem (Do not use generic placeholders like Phase 1, Phase 2).

    Write an analytical, hard-hitting profile of this contract. Do not write the final cover letter or proposal yet.
  `;

  return await generateAIResponse({
    model,
    prompt: userInput,
    systemInstruction: plannerInstruction,
    userId, // ✅ required by AIRequestParams
  });
}