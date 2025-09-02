import InputSearch from "./InputSearch";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex gap-2 px-1 py-4 items-center justify-between bg-white dark:bg-[#141414]">
      <img src="/logo-rawgio.webp" alt="" className="w-12 h-auto xl:w-18" />
      <InputSearch />
      <div className="flex gap-2 items-center pr-3">
        <ThemeToggle />
        <p>Dark mode</p>
      </div>
    </div>
  );
};

export default NavBar;
