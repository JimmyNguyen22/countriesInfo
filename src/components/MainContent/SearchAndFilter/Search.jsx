import React from "react";
import { MdSearch } from "react-icons/md";
import "./search.scss";

export default function Search(props) {
  return (
    <div className="search">
      <h3>Search Country: </h3>
      <div className="searchElement">
        <input type="text" placeholder="Input the and enter to search ..." />
        <div style={{ width: "40px", height: "100%" }}>
          <MdSearch className="icon"></MdSearch>
        </div>
      </div>
    </div>
  );
}
