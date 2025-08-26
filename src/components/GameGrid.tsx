import { useGames } from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li className="text-black" key={game.id}>
            {game.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
