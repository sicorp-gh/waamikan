function Search() {
  return (
    <div className="w-full rounded overflow-hidden bg-gray-50 border-2 border-gray-200">
      <h1 className="p-2 bg-gray-200 font-semibold">Search Product</h1>
      <div className="px-3 py-5">
        <label className="input border-2 border-gray-300 bg-white w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
    </div>
  );
}

export default Search;
