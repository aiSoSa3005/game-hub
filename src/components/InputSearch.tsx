import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (q: string | undefined) => void;
}
const InputSearch = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      const q = query.trim();
      onSearch(q == "" ? undefined : q);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);
  return (
    <form
      className="flex items-center h-[45px] gap-3 border-2 bg-[#3b3b3b] hover:bg-gray-400 transition-all duration-300 ease-in-out  rounded-2xl mx-auto w-full max-w-[900px] pl-2 "
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="h-full flex gap-3">
        <button type="submit">
          <CiSearch className="text-2xl" />
        </button>
      </div>
      <input
        className="flex-1 focus:outline-none text-white "
        type="search"
        placeholder="Search games"
        aria-label="Search games"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default InputSearch;
