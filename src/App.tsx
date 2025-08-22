import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] h-screen">
        <nav className="col-span-2 bg-blue-500">Navbar</nav>
        <aside className="hidden lg:bg-yellow-600 lg:block ">Aside</aside>
        <main className="bg-orange-600 col-span-2 lg:col-span-1">Main</main>
      </div>
    </>
  );
}

export default App;
