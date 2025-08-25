import { GrCube } from "react-icons/gr";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex gap-2 px-1 py-4 justify-between">
      <GrCube color="black" size={30} />

      <button>
        <ThemeToggle />
      </button>
    </div>
  );
};

export default NavBar;
