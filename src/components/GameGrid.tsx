import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import axios from "axios";

interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Game[]>("/games")
      .then((res) => setGames(res.data.slice(0, 20)))
      .catch((err) => setError(err.message));
  }, []);
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
