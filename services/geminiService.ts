import { GoogleGenAI } from "@google/genai";
import { Candidate, JobOffer, StudentProfile } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Helper to check if API key is present
export const isApiKeyAvailable = () => !!apiKey;

export const analyzeMatch = async (candidateName: string, jobTitle: string, score: number): Promise<string> => {
  if (!apiKey) return "API Key not configured. Please check your environment settings.";

  const model = "gemini-2.5-flash";
  const prompt = `
    Analyze the compatibility between candidate "${candidateName}" and the job role "${jobTitle}".
    The system has calculated a preliminary match score of ${score}/100.
    Provide a concise, 3-sentence professional summary explaining why this candidate might be a good fit or what might be missing.
    Focus on potential strengths and weaknesses based on the role title and score.
    Do not use markdown. Keep it plain text.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || "Analysis unavailable.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate analysis at this time.";
  }
};

export const generateSmartProfileBio = async (profile: StudentProfile): Promise<string> => {
  if (!apiKey) return profile.bio;

  const model = "gemini-2.5-flash";
  const prompt = `
    Create a catchy, modern, and "Gen Z friendly" 1-sentence bio for a student profile based on these skills:
    ${profile.hardSkills.map(s => s.name).join(', ')} and soft skills: ${profile.softSkills.map(s => s.subject).join(', ')}.
    Make it sound ambitious and tech-savvy.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || profile.bio;
  } catch (error) {
    return profile.bio;
  }
};