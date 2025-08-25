import "./App.css";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] h-screen bg-white ">
        <nav className="col-span-2 ">
          <NavBar />
        </nav>
        <aside className="hidden lg:bg-yellow-600 lg:block lg:dark:bg-blue-200">
          Aside
        </aside>
        <main className="bg-gray-300 col-span-2 lg:col-span-1 dark:bg-pink-500">
          <GameGrid />
        </main>
      </div>
    </>
  );
}

export default App;
