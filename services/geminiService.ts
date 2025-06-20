
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { NewsItem, ReleaseItem, Tidbit } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "FALLBACK_KEY_FOR_INITIALIZATION_ONLY" }); // Fallback to prevent crash if key is missing, but calls will fail.

const MODEL_NAME = "gemini-2.5-flash-preview-04-17";

const parseJsonSafe = <T,>(jsonString: string, itemType: string): T[] | null => {
  let cleanJsonString = jsonString.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = cleanJsonString.match(fenceRegex);
  if (match && match[2]) {
    cleanJsonString = match[2].trim();
  }

  try {
    const parsed = JSON.parse(cleanJsonString);
    if (Array.isArray(parsed)) {
      return parsed as T[];
    }
    console.warn(`Expected an array for ${itemType} but got:`, typeof parsed, parsed);
    // Attempt to wrap single object in an array if that seems to be the case
    if(typeof parsed === 'object' && parsed !== null) {
      return [parsed as T];
    }
    return null;
  } catch (error) {
    console.error(`Failed to parse JSON for ${itemType}:`, error);
    console.error("Original string:", jsonString);
    return null;
  }
};


export const fetchTechNews = async (): Promise<NewsItem[]> => {
  if (!API_KEY) return Promise.resolve([]);
  try {
    const prompt = `Generate 3 fictional but plausible latest tech trend news items. For each item, provide an "id" (unique string like "news-1"), a "title", a short "summary" (2-3 sentences), a "source" (e.g., "TechPulse AI"), "date" (e.g., "October 26, 2024"), and an optional "url" (placeholder like "#"). Return as a JSON array of objects. Ensure valid JSON format.`;
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });
    
    const newsItems = parseJsonSafe<NewsItem>(response.text, 'news');
    return newsItems || [];
  } catch (error) {
    console.error("Error fetching tech news from Gemini:", error);
    return [];
  }
};

export const fetchNewReleases = async (): Promise<ReleaseItem[]> => {
  if (!API_KEY) return Promise.resolve([]);
  try {
    const prompt = `Generate 2 fictional new tech product releases. For each, provide an "id" (unique string like "release-1"), "productName", "description" (1-2 sentences), "releaseDate" (e.g., "November 5, 2024"), "category" (e.g., "Software", "Hardware", "AI Model"), and an optional "url" (placeholder like "#"). Return as a JSON array of objects. Ensure valid JSON format.`;
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });
    const releaseItems = parseJsonSafe<ReleaseItem>(response.text, 'releases');
    return releaseItems || [];
  } catch (error) {
    console.error("Error fetching new releases from Gemini:", error);
    return [];
  }
};

export const fetchTechTidbits = async (): Promise<Tidbit[]> => {
  if (!API_KEY) return Promise.resolve([]);
  try {
    const prompt = `Generate 4 short, insightful tech tidbits or 'whispers' about current technology. Each tidbit should be a single sentence. Return as a JSON array of objects, where each object has an "id" (unique string like "tidbit-1") and a "text" field. Ensure valid JSON format.`;
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });
    const tidbitItems = parseJsonSafe<Tidbit>(response.text, 'tidbits');
    return tidbitItems || [];
  } catch (error) {
    console.error("Error fetching tech tidbits from Gemini:", error);
    return [];
  }
};
    