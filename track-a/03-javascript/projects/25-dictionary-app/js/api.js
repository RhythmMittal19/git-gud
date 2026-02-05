import { API_CONFIG } from "./config.example.js";

/* ---- in-memory cache ---- */
const cache = new Map();

/**
 * Fetch word definition with caching and timeout.
 */
export async function fetchDefinition(word) {
  const key = word.toLowerCase().trim();

  /* check cache */
  const cached = cache.get(key);
  if (cached && Date.now() - cached.ts < API_CONFIG.CACHE_TTL) {
    return structuredClone(cached.data);
  }

  /* fetch with timeout */
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}${encodeURIComponent(key)}`,
      { signal: controller.signal },
    );

    if (!res.ok) {
      if (res.status === 404)
        throw new Error(`No definition found for "${word}".`);
      throw new Error("Something went wrong. Please try again.");
    }

    const [raw] = await res.json();
    const data = normalise(raw);

    cache.set(key, { data, ts: Date.now() });

    return structuredClone(data);
  } catch (err) {
    if (err.name === "AbortError")
      throw new Error("Request timed out. Check your connection.");
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

/* ---- normalise API shape ---- */
function normalise(raw) {
  return {
    word: raw.word,
    phonetic: raw.phonetic || raw.phonetics?.find((p) => p.text)?.text || "",
    audioUrl: raw.phonetics?.find((p) => p.audio)?.audio || "",
    meanings: raw.meanings.map((m) => ({
      partOfSpeech: m.partOfSpeech,
      definitions: m.definitions.map((d) => ({
        definition: d.definition,
        example: d.example || null,
      })),
      synonyms: m.synonyms || [],
      antonyms: m.antonyms || [],
    })),
    sourceUrls: raw.sourceUrls || [],
  };
}
