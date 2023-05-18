import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
      />
      <button className="search-bar__button">Search</button>
    </div>
  );
};

export default SearchBar;
