import React from "react";

function SearchBar({ handleSearch, searchPerson }) {
  return (
    <div>
      search <input onChange={handleSearch} value={searchPerson} />
    </div>
  );
}

export default SearchBar;
