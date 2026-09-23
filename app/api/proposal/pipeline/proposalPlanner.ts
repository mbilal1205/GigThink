import { generateAIResponse } from "@/lib/ai/orchestrator/orchestrator";

export async function planProposal(userInput: string, model: string): Promise<string> {
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
    systemInstruction: plannerInstruction
  });
}