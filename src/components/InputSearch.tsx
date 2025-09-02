import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  return (
    <form
      className="flex items-center h-[45px] gap-3 border-2 bg-[#3b3b3b] hover:bg-gray-400 transition-all duration-300 ease-in-out  rounded-2xl mx-auto w-full max-w-[900px] pl-2 "
      role="search"
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
      />
    </form>
  );
};

export default InputSearch;
