import React from "react";
import "./searchAndFilter.scss";
import Search from "./Search";
import Filter from "./Filter";

export default function SearchAndFilter(props) {
  return (
    <div className="searchAndFilter">
      <Search></Search>
      <Filter></Filter>
    </div>
  );
}
