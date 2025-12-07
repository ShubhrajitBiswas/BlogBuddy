import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  console.error("Warning: GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function main(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
 return response.text;
}

export default main;