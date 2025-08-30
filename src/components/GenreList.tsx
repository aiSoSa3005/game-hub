import { useGenre } from "@/hooks/useGenre";
import { Loader2 } from "lucide-react";
interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string;
  genres: string[] | undefined;
}
const GenreList = ({ onSelectGenre, selectedGenre, genres }: Props) => {
  type genre =
    | "Fighting"
    | "Action"
    | "Battle Royale"
    | "MMOARPG"
    | "MMORPG"
    | "Shooter"
    | "Strategy";
  const genreImageMap: Record<genre, string> = {
    Fighting: "/genrebg/arpg-logo.jpg",
    Action: "/genrebg/logo-action.png",
    "Battle Royale": "/genrebg/battleroyale-logo.webp",
    MMOARPG: "/genrebg/mmoarpg-logo.jpg",
    MMORPG: "/genrebg/mmorpg-logo.png",
    Shooter: "/genrebg/shooter-logo.jpg",
    Strategy: "/genrebg/strategy-logo.jpg",
  };

  return (
    <ul className="">
      {genres &&
        genres.map((g) => (
          <li key={g} className="flex items-center space-x-2 mb-4">
            <img
              src={genreImageMap[g as genre]}
              alt={g}
              className="w-16 h-16 object-cover object-center rounded-xl"
            />
            <button onClick={() => onSelectGenre(g)}>
              <p
                className={`text-lg hover:underline ${
                  g === selectedGenre ? "font-bold" : "font-normal"
                }`}
              >
                {g}
              </p>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default GenreList;
