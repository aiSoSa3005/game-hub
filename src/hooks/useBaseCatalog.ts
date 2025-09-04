import { fetchBasegames, fetchGames, type GameParams } from "@/api/ftg";
import { useEffect, useState } from "react";
import type { Game } from "./useGames";

export const useBaseCatolog = () => {
  const [baseGames, setBaseGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    /*  const params: GameParams = {
      genre: "",
      platform: "",
    }; */

    fetchBasegames()
      .then((data) => setBaseGames(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    return () => ac.abort();
  }, []);

  return { baseGames, error, isLoading };
};
