import InputSearch from "./InputSearch";
import ThemeToggle from "./ThemeToggle";

interface Props {
  onSearch: (q: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex gap-2 px-1 py-4 items-center justify-between bg-white dark:bg-[#141414]">
      <img src="/logo-rawgio.webp" alt="" className="w-12 h-auto xl:w-18" />
      <InputSearch onSearch={(q: string) => onSearch(q)} />
      <div className="flex gap-2 items-center pr-3">
        <ThemeToggle />
        <p className="whitespace-nowrap ">Dark mode</p>
      </div>
    </div>
  );
};

export default NavBar;
