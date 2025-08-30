import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { useGames } from "./hooks/useGames";
import { useBaseCatolog } from "./hooks/useBaseCatalog";
import { getGenres, getPlatforms } from "./api/ftg";

function App() {
  const [selectedGenre, setSelectedgenre] = useState("");
  const [selectedPlatfrom, setSelectedPlatform] = useState("");
  const { games, isLoading, error } = useGames({
    genre: selectedGenre,
    platform: selectedPlatfrom,
  });
  const { baseGames } = useBaseCatolog();
  const genres = getGenres(baseGames);
  const platforms = getPlatforms(baseGames);

  return (
    <>
      <div className="scrollbar-hide  grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr] h-screen bg-white dark:bg-[#141414] ">
        <nav className="col-span-2 mb-5">
          <NavBar />
        </nav>
        <aside className="hidden lg:p-4 md:p-4 lg:col-span-1 lg:bg-white lg:block lg:dark:bg-[#141414]">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(g) => setSelectedgenre(g)}
            genres={genres}
          />
        </aside>
        <main className=" col-span-2 lg:col-span-1  bg-white dark:bg-[#141414]">
          <PlatformSelector
            platforms={platforms}
            onSelect={(p) => setSelectedPlatform(p)}
          />
          <GameGrid games={games} />
        </main>
      </div>
    </>
  );
}

export default App;
