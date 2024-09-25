const Search = ({ className }) => {
  return (
    <div className={`relative w-72 ${className}`}>
      <input
        name="global_input"
        type="text"
        className="peer w-full h-10 bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-[#B4B1B4] rounded-[7px] pl-3 pr-10 py-2.5 text-sm placeholder-gray-500"
        placeholder="Search"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B696B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </div>
  );
};

export default Search;
