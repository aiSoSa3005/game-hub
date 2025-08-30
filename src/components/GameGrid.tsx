import GameCard from "./GameCard";
import { type Game } from "@/hooks/useGames";

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 justify-center p-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {games.map((g) => (
          <GameCard game={g}></GameCard>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
