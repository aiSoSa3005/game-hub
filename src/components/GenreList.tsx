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
    | "Strategy"
    | "ARPG"
    | "Action RPG"
    | "Card Game"
    | "MOBA"
    | "Action Game"
    | "Social"
    | "Sports"
    | "RPG"
    | "MMO"
    | "Racing"
    | "MMORPG"
    | "Fantasy";
  const genreImageMap: Record<genre, string> = {
    Fighting: "/genrebg/arpg-logo.jpg",
    Action: "/genrebg/logo-action.png",
    "Battle Royale": "/genrebg/battleroyale-logo.webp",
    MMOARPG: "/genrebg/mmoarpg-logo.jpg",
    MMORPG: "/genrebg/mmorpg-logo.png",
    Shooter: "/genrebg/shooter-logo.jpg",
    Strategy: "/genrebg/strategy-logo.jpg",
    ARPG: "genrebg/anelli-arpg.webp",
    "Action RPG": "/genrebg/anima-arpg.jpg",
    "Card Game": "/genrebg/cardgame.png",
    MOBA: "/genrebg/moba.jpg",
    "Action Game": "/genrebg/action-logo.jpg",
    Social: "/genrebg/social.jpg",
    Sports: "/genrebg/sports.jpg",
    RPG: "/genrebg/rpggame.avif",
    MMO: "/genrebg/mmo.jpg",
    Racing: "/genrebg/racing.avif",
    Fantasy: "/genrebg/fantasy.jpg",
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
