import apiClient from "@/services/api-client";
import { useGames, type Game } from "./useGames";
import { useState } from "react";

const EXCLUDED_GENRES = new Set(["ARPG", "Card Game", "Action RPG"]);

export const useGenre = () => {
  const { games, isLoading, error } = useGames();

  const [genreError, setGenreError] = useState<string | null>(error ?? null);
  const [isGenreLoading, setIsGenreLoading] = useState(false);

  const genres: string[] = error
    ? []
    : Array.from(new Set(games.map((g) => g.genre)))
        .filter((g) => !EXCLUDED_GENRES.has(g))
        .sort((a, b) => a.localeCompare(b));

  const filterGenre = async (genre: string): Promise<Game[]> => {
    if (error) {
      setGenreError(error);
      return [];
    }

    setIsGenreLoading(true);
    setGenreError(null);

    try {
      const res = await apiClient.get<Game[]>(
        `/games?category=${encodeURIComponent(genre)}`
      );
      return res.data.filter((g) => !EXCLUDED_GENRES.has(g.genre));
    } catch (err) {
      setGenreError((err as Error)?.message ?? String(err));
      return [];
    } finally {
      setIsGenreLoading(false);
    }
  };

  return {
    genres,
    games,
    isLoading,
    error,
    filterGenre,
    genreError,
    isGenreLoading,
  };
};
