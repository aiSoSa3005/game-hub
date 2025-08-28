import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
  const [selectedGenre, setSelectedgenre] = useState("");
  return (
    <>
      <div className="scrollbar-hide  grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr] h-screen bg-white ">
        <nav className="col-span-2 ">
          <NavBar />
        </nav>
        <aside className="hidden lg:p-4 md:p-4 lg:col-span-1 lg:bg-white lg:block lg:dark:bg-[#141414]">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(g) => setSelectedgenre(g)}
          />
        </aside>
        <main className=" col-span-2 lg:col-span-1  bg-white dark:bg-[#141414]">
          <GameGrid selectedGenre={selectedGenre} />
        </main>
      </div>
    </>
  );
}

export default App;
