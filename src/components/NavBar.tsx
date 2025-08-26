import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex gap-2 px-1 py-4 justify-between bg-white dark:bg-[#151515]">
      <img src="/logo-rawgio.webp" alt="" className="w-12 h-auto" />

      <button>
        <ThemeToggle />
      </button>
    </div>
  );
};

export default NavBar;
