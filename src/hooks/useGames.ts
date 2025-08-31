import { useState, useEffect } from "react";
import axios from "axios";
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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetchGames(params, controller.signal)
      .then((games) => {
        setGames(games);
      })
      .catch((err: unknown) => {
        if (
          (err as any)?.name === "AbortError" ||
          (axios.isAxiosError(err) && err.code === "ERR_CANCELED")
        )
          return;

        setGames([]);

        /* if (axios.isAxiosError(err)) {
          setError(err?.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Errore sconosciuto");
        } */
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [params.genre, params.platform]);

  return { games, error, isLoading };
};
