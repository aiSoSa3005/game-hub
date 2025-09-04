import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { useGames } from "./hooks/useGames";
import { useBaseCatolog } from "./hooks/useBaseCatalog";
import { getGenres, getPlatforms } from "./api/ftg";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedgenre] = useState("");
  const [selectedPlatfrom, setSelectedPlatform] = useState("");
  const [selectedSortCategory, setSelectdsortCategory] = useState("");
  const { games, isLoading, error } = useGames({
    genre: selectedGenre,
    platform: selectedPlatfrom,
    sortBy: selectedSortCategory,
  });
  const { baseGames } = useBaseCatolog();
  const genres = getGenres(baseGames);
  const platforms = getPlatforms(baseGames);
  const visibleGames = games.length > 0 ? games : [];

  return (
    <>
      <div className="scrollbar-hide  grid grid-cols-[1fr_5fr] xl:grid-cols-[1fr_7fr] grid-rows-[auto_1fr] h-screen bg-white dark:bg-[#141414] ">
        <nav className="col-span-2 mb-5">
          <NavBar />
        </nav>
        <aside className="hidden lg:p-4  lg:col-span-1 lg:bg-white lg:block lg:dark:bg-[#141414]">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(g) => setSelectedgenre(g)}
            genres={genres}
          />
        </aside>
        <main className=" col-span-2 p-4 lg:col-span-1  bg-white dark:bg-[#141414] ">
          <section className="ml-4 flex gap-3">
            <PlatformSelector
              platforms={platforms}
              onSelect={(p) => setSelectedPlatform(p)}
            />
            <SortSelector onChange={(v) => setSelectdsortCategory(v)} />
          </section>

          {error ? (
            <p className="font-semibold p-1 text-red-500">{error}</p>
          ) : (
            <GameGrid error={error} loading={isLoading} games={visibleGames} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
