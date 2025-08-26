import { useGames } from "./useGames";

export const useGenre = () => {
  const { games, isLoading, error } = useGames();

  const genres = Array.from(new Set(games.map((game) => game.genre).sort()));

  return { genres, isLoading, error };
};
