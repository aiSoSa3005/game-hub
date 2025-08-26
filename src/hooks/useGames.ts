import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Game[]>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.slice(0, 20)))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
