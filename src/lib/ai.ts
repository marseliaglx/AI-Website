import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

export const getAIActGuidance = async (useCase: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI Compliance Expert analyzing a business use case for EU AI Act implications.
      Use Case: ${useCase}
      
      Provide a concise 3-part response:
      1. Risk Tier (Unacceptable, High, Limited, or Minimal)
      2. Key Obligations (2-3 bullet points)
      3. Next Steps (Actionable advice for a small business)
      
      Keep it professional, encouraging, and clear. Avoid legal jargon where possible.`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently updating my regulatory knowledge. Please try again in a moment or book a consultation.";
  }
};
