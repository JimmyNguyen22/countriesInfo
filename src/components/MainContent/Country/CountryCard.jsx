import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import "./countryCard.scss";

export default function CountryCard(props) {
  const { country } = props;

  const themeContext = useContext(ThemeContext);

  return (
    <Link to={`/country/${country.name}`}>
      <div className={`${themeContext.theme} countryCard`}>
        <div className="flag">
          <img src={country.flag} alt="img" />
        </div>
        <div className="countryInfo">
          <h3>{country.name}</h3>
          <div>
            Population: <span>{country.population}</span>
          </div>
          <div>
            Region: <span>{country.region}</span>
          </div>
          <div>
            Capital: <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
