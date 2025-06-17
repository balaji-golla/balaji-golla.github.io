
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { NewsItem } from '../types';
import { GEMINI_API_KEY_ERROR_MESSAGE, GEMINI_MODEL_TEXT } from '../constants';

interface GeminiNewsResponse {
  newsItems: NewsItem[];
}

export const fetchTechNews = async (): Promise<NewsItem[]> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error(GEMINI_API_KEY_ERROR_MESSAGE);
    throw new Error(GEMINI_API_KEY_ERROR_MESSAGE);
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Provide a list of 3-5 recent and significant tech news headlines and summaries.
    The response MUST be a JSON object with a single key "newsItems".
    The value of "newsItems" MUST be an array of objects.
    Each object in the array MUST have the following properties:
    - "title": A string representing the news headline.
    - "summary": A string (1-2 sentences) summarizing the news.
    - "sourceUrl": An optional string URL to the news source if available.
    - "publishedDate": An optional string representing the approximate publication date (e.g., "YYYY-MM-DD") if available.
    Example:
    {
      "newsItems": [
        { 
          "title": "New AI Model Achieves Breakthrough", 
          "summary": "A novel artificial intelligence model has demonstrated unprecedented capabilities in natural language understanding.",
          "sourceUrl": "https://example.com/news/ai-breakthrough",
          "publishedDate": "2024-07-20"
        }
      ]
    }
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.5, // For factual news, lower temperature
      },
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData: GeminiNewsResponse = JSON.parse(jsonStr);
    
    if (parsedData && Array.isArray(parsedData.newsItems)) {
      return parsedData.newsItems.map(item => ({
        title: item.title || "Untitled News",
        summary: item.summary || "No summary available.",
        sourceUrl: item.sourceUrl,
        publishedDate: item.publishedDate,
      }));
    } else {
      console.error("Unexpected JSON structure from Gemini API:", parsedData);
      throw new Error("Failed to parse news data: Unexpected structure.");
    }

  } catch (error) {
    console.error("Error fetching or parsing tech news from Gemini API:", error);
    // Propagate a generic error or a specific one if identifiable
    if (error instanceof Error && error.message.includes("API key not valid")) {
        throw new Error("Invalid API Key for Gemini. Please check your configuration.");
    }
    throw new Error("Failed to fetch tech news from Gemini API.");
  }
};
