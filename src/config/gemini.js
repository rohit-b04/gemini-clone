import { GoogleGenAI } from "@google/genai";
const API_KEY = "AIzaSyBRJbCYGjlWqYola-yvtzanAEu1ENJNtNM";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

async function main(prompt) {
  const ai = new GoogleGenAI({
    //apiKey: process.env.GEMINI_API_KEY,
    apiKey: API_KEY,
  });
  const tools = [
    {
      googleSearch: {},
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = "gemini-2.5-pro";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  //console.log(response.text);
  let fileIndex = 0;
  let fullResponse = "";
  for await (const chunk of response) {
    fullResponse += chunk.text;
  }
  return fullResponse;
}

export default main;
