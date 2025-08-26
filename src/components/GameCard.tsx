import type { Game } from "@/hooks/useGames";
import { FaInternetExplorer } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import type { IconType } from "react-icons";
interface Props {
  game: Game;
}
type PlatformKey = "PC (Windows)" | "Web Browser";
const GameCard = ({ game }: Props) => {
  const iconsMap: Record<PlatformKey, IconType> = {
    "PC (Windows)": FaWindows,
    "Web Browser": FaInternetExplorer,
  };
  const Icon = iconsMap[game.platform as PlatformKey];
  return (
    <div className="flex flex-col rounded-xl lg:max-w-xs overflow-hidden bg-[#202020]">
      <div className="w-full aspect-[16/9]">
        <img
          src={game.thumbnail}
          loading="lazy"
          alt={game.title}
          className=" h-full w-full object-center aspect-[16/9] object-cover "
        />
      </div>

      <div className=" p-3">
        <h1 className="text-white font-semibold text-lg line-clamp-1 mb-1">
          {game.title}
        </h1>

        {Icon && <Icon className="text-white" />}
      </div>
    </div>
  );
};

export default GameCard;
