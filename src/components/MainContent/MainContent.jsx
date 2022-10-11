import React from "react";
import Country from "./Country/Country";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";

export default function MainContent() {
  return (
    <div>
      <SearchAndFilter></SearchAndFilter>
      <Country></Country>
    </div>
  );
}
