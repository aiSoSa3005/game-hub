import type { Game } from "@/hooks/useGames";
import { FaInternetExplorer, FaWindows } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Props {
  game: Game;
}

type PlatformKey = "PC (Windows)" | "Web Browser" | "PC (Windows),Web Browser";

const GameCard = ({ game }: Props) => {
  const iconsMap: Record<PlatformKey, IconType[]> = {
    "PC (Windows)": [FaWindows],
    "Web Browser": [FaInternetExplorer],
    "PC (Windows),Web Browser": [FaWindows, FaInternetExplorer],
  };

  const platformIcons = iconsMap[game.platform as PlatformKey] || [];

  return (
    <div className="flex flex-col rounded-xl lg:max-w-xs overflow-hidden bg-[#202020] transition-transform duration-300 hover:scale-105">
      <div className="w-full aspect-[16/9]">
        <img
          src={game.thumbnail}
          loading="lazy"
          alt={game.title}
          className="h-full w-full object-center aspect-[16/9] object-cover"
        />
      </div>

      <div className="p-3">
        <h1 className="text-white font-semibold text-lg line-clamp-1 mb-2">
          {game.title}
        </h1>

        <div className="flex gap-2">
          {platformIcons.map((IconComponent, index) => (
            <IconComponent key={index} className="text-gray-400 text-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
