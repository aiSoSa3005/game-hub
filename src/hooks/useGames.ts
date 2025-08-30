import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { fetchGames, type GameParams } from "@/api/ftg";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

export const useGames = (params: GameParams) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetchGames(params, controller.signal)
      .then((res) => setGames(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};
