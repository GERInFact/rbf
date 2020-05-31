import React from "react";
import "./searchbox.css";

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchBoxProps) : JSX.Element => {
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
