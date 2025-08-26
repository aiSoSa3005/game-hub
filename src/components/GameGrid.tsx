import { useGames } from "@/hooks/useGames";
import GameCard from "./GameCard";
import { SkeletonCard } from "./SkeletonCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 justify-center p-4 md:grid-cols-2  lg:grid-cols-4 gap-3 ">
        {isLoading
          ? skeletons.map((s) => <SkeletonCard key={s} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default GameGrid;
