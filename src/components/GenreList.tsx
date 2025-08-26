import { useGenre } from "@/hooks/useGenre";

const GenreList = () => {
  const { genres, isLoading, error } = useGenre();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  );
};

export default GenreList;
