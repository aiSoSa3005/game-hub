import type { Game } from "@/hooks/useGames";
import apiClient from "@/services/api-client";

export type GameParams = {
  genre: string;
  platform: string;
  search?: string;
  sortBy?: string;
};

function platformToApi(p?: string) {
  if (!p) return undefined;
  if (p === "PC (Windows)") return "pc";
  if (p === "Web Browser") return "browser";
  return undefined;
}

function genreToApi(g?: string) {
  if (!g) return undefined;
  const MAP: Record<string, string> = {
    "Battle Royale": "battle-royale",
    "Action RPG": "action-rpg",
    "Third Person": "third-person",
    MMOARPG: "mmoarpg",
    MMORPG: "mmorpg",
    Shooter: "shooter",
    Strategy: "strategy",
    Fighting: "fighting",
    Action: "action",
  };

  return MAP[g] ?? g.toLowerCase().replace(/\s+/g, "-");
}
function sortByApi(g?: string) {
  if (!g) return undefined;
  return g.toLowerCase().replace(/\s+/g, "-");
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

export function fetchBasegames() {
  return apiClient.get<Game[]>("/games").then((res) => res.data);
}

export async function fetchGames(params: GameParams, signal: AbortSignal) {
  const query: Record<string, string> = {};
  const g = genreToApi(params.genre);
  const p = platformToApi(params.platform);
  const c = sortByApi(params.sortBy);
  if (p) query.platform = p;
  if (g) query.category = g;
  if (c) query["sort-by"] = c;

  const response = await apiClient.get<Game[]>("/games", {
    params: query,
    signal,
  });

  const data = Array.isArray(response.data) ? response.data : [];

  return data;
}
