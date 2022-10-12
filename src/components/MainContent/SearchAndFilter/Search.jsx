import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./search.scss";

export default function Search(props) {
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      valueInput !== "" ? navigate(`/search/${valueInput}`) : navigate("/");
    }
  };

  return (
    <div className="search">
      <h3>Search Country: </h3>
      <div className="searchElement">
        <input
          type="text"
          placeholder="Input the and enter to search ..."
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          onKeyDown={handleKeyDown}
        />
        <Link
          to={valueInput !== "" ? `/search/${valueInput}` : `/`}
          style={{ width: "40px", height: "100%" }}
        >
          <MdSearch className="icon"></MdSearch>
        </Link>
      </div>
    </div>
  );
}
