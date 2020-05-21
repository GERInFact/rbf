import React from "react";
import "./searchbox.css";

const SearchBox = (props) => {
  const { searchChange } = props;
  return (
    <div className="search-box">
      <input
        aria-label="Search field for robots"
        type="search"
        placeholder="search robots"
        className="search-box_input"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
