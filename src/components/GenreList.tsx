import { useGenre } from "@/hooks/useGenre";
import { Loader2 } from "lucide-react";

const GenreList = () => {
  const { genres, isLoading, error } = useGenre();
  type genre =
    | "ARPG"
    | "Action RPG"
    | "Battle Royale"
    | "MMOARPG"
    | "MMORPG"
    | "Shooter"
    | "Strategy";
  const genreImageMap: Record<genre, string> = {
    ARPG: "/genrebg/arpg-logo.jpg",
    "Action RPG": "/genrebg/logo-action.png",
    "Battle Royale": "/genrebg/battleroyale-logo.webp",
    MMOARPG: "/genrebg/mmoarpg-logo.jpg",
    MMORPG: "/genrebg/mmorpg-logo.png",
    Shooter: "/genrebg/shooter-logo.jpg",
    Strategy: "/genrebg/strategy-logo.jpg",
  };

  if (isLoading)
    return <Loader2 className="h-6 w-6 animate-spin text-gray-500" />;
  if (error) return null;
  return (
    <ul className="">
      {genres.map((g) => (
        <li key={g} className="flex items-center space-x-2 mb-4">
          <img
            src={genreImageMap[g as genre]}
            alt={g}
            className="w-16 h-16 object-cover object-center rounded-xl"
          />
          <p className="text-lg">{g}</p>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
