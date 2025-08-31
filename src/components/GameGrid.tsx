import GameCard from "./GameCard";
import { type Game } from "@/hooks/useGames";

import { SkeletonCard } from "./SkeletonCard";

interface Props {
  games: Game[];
  loading: boolean;
  error: string | null;
}

const GameGrid = ({ games, loading, error }: Props) => {
  if (!games.length && !loading) {
    return <div>no games!</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 justify-center p-4 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
              <SkeletonCard key={s}></SkeletonCard>
            ))
          : error
          ? error
          : games.map((g) => <GameCard key={g.id} game={g}></GameCard>)}
      </div>
    </>
  );
};

export default GameGrid;
