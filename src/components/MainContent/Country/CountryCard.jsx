import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import "./countryCard.scss";

export default function CountryCard() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`${themeContext.theme} countryCard`}>
      <div className="flag">
        <img src="" alt="img" />
      </div>
      <div className="countryInfo">
        <h3>vietnam</h3>
        <div>
          Population:
          <span>123</span>
        </div>
        <div>
          Region:
          <span>asia</span>
        </div>
        <div>
          Capital:
          <span>kalub</span>
        </div>
      </div>
    </div>
  );
}
