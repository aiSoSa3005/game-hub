import type { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
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
        <h1 className="text-white font-semibold text-lg line-clamp-1">
          {game.title}
        </h1>
      </div>
    </div>
  );
};

export default GameCard;
