import React from "react";

const SearchBar = ({ setSearchValue }) => (
  <div id="searchBar">
    <input
      id="search"
      type="search"
      placeholder="Search Shows"
      onChange={event => setSearchValue(event)}
    />
    
  </div>
);

export default SearchBar;
