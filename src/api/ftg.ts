import type { Game } from "@/hooks/useGames";
import apiClient from "@/services/api-client";

export type GameParams = {
  genre: string;
  platform: string;
  search?: string;
};

function platformToApi(p?: string) {
  if (!p) return undefined;
  if (p === "PC (Windows)") return "pc";
  if (p === "Web Browser") return "browser";
  return undefined;
}

function genreToApi(g?: string) {
  return g ? g.toLowerCase() : undefined;
}
export function getGenres(baseGames: Game[]): string[] | undefined {
  let genres = new Set<string>();
  for (const g of baseGames) {
    genres.add(g.genre);
  }
  const genresArr: string[] = Array.from(genres);

  return genresArr;
}

export function getPlatforms(baseGames: Game[]): string[] | undefined {
  const s = new Set<string>();
  for (const g of baseGames)
    g.platform?.split(/,\s*/).forEach((p) => p && s.add(p.trim()));
  return Array.from(s).sort();
}

export async function fetchGames(params: GameParams, signal: AbortSignal) {
  const query: Record<string, string> = {};
  const g = genreToApi(params.genre);
  const p = platformToApi(params.platform);

  if (g) query.g = query.genre = g;
  if (p) query.p = query.platform = p;

  const { data } = await apiClient.get<Game[]>("/games", {
    params: query,
    signal,
  });

  return data;
}
