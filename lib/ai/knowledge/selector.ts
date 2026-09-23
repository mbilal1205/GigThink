// lib/ai/knowledge/selector.ts
import { MasterKnowledge } from "./knowledge";

export const getRelevantKnowledge = (intent: any) => {
  let context = "";

  // 1. Industry Context (Injection)
  if (intent.industryId && MasterKnowledge.industries[intent.industryId]) {
    context += `[INDUSTRY_EXPERT_DATA]: ${JSON.stringify(MasterKnowledge.industries[intent.industryId])}\n\n`;
  }

  // 2. Communication Strategy (Injection)
  // Jab AI ko proposal ya communication likhna hoga, yeh strategies automatically inject hongi
  if (intent.category === "proposal" || intent.category === "communication") {
    context += `[SALES_STRATEGY_FRAMEWORK]: ${JSON.stringify(MasterKnowledge.sales)}\n`;
    context += `[COMMUNICATION_GUIDELINES]: ${JSON.stringify(MasterKnowledge.communication)}\n`;
  }

  // 3. Tech/Pricing Context
  if (intent.category === "tech") {
    context += `[TECH_STACK_EXPERT_DATA]: Guidelines on modern architecture and stack selection.\n`;
  }

  return context;
};