import GameCard from "./GameCard";
import { SkeletonCard } from "./SkeletonCard";
import { useGenre } from "@/hooks/useGenre";
import { useEffect, useState } from "react";
import { type Game } from "@/hooks/useGames";

interface Props {
  selectedGenre: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading, filterGenre, genreError, isGenreLoading } =
    useGenre();
  const [visibleGames, setVisibleGames] = useState<Game[]>(games);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!selectedGenre) {
        setVisibleGames(games);
        return;
      }
      try {
        const filtered = await filterGenre(selectedGenre);
        if (!cancelled) setVisibleGames(filtered);
      } catch {
        if (!cancelled) setVisibleGames([]);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [selectedGenre, games]);

  const skeletons = Array.from({ length: 9 }, (_, i) => i);

  return (
    <>
      {error && <p>{error}</p>}
      {genreError && <p>{genreError}</p>}
      <div className="grid grid-cols-1 justify-center p-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {isLoading || isGenreLoading
          ? skeletons.map((s) => <SkeletonCard key={s} />)
          : visibleGames.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default GameGrid;
