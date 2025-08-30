import { useGames } from "./useGames";

export const usePlatform = () => {
  const { games, error } = useGames();

  const platforms = error
    ? [""]
    : Array.from(new Set(games.map((g) => g.platform)));

  return { platforms };
};
