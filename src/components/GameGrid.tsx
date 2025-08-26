import { useGames } from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 justify-center p-4 md:grid-cols-2  lg:grid-cols-4 gap-3 ">
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
