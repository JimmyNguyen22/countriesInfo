import React, { useContext, useEffect, useState } from "react";
import styles from "./countryInfo.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollBar from "react-perfect-scrollbar";

const getLanguages = (country) => {
  let result = "";
  country.languages.forEach((language) => {
    result !== ""
      ? (result += " - " + language.name)
      : (result += language.name);
  });
  return result;
};

const getCountryNameByCode = async (code) => {
  const result = await axios.get(
    `https://restcountries.com/v2/alpha?codes=${code}`
  );
  return result.data;
};

export default function CountryInfo(props) {
  const themeContext = useContext(ThemeContext);

  const country = useSelector((state) => state.Countries.country);

  const [countriesBorder, setCountriesBorder] = useState([]);

  useEffect(() => {
    if (country && country.borders) {
      getCountryNameByCode(country.borders)
        .then((res) => {
          const countryName = res.map((country) => country.name);
          setCountriesBorder(countryName);
        })

        .catch((error) => console.log(error));
    }
  }, [country]);

  return (
    <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
      <div className={styles.countryInfo}>
        {country && (
          <>
            <h3 className={styles.countryName}>{country.name}</h3>
            <table>
              <tbody>
                <tr>
                  <td className={styles.title}>Native Name</td>
                  <td>:</td>
                  <td className={styles.value}>{country.nativeName}</td>
                </tr>
                <tr>
                  <td className={styles.title}>Official</td>
                  <td>:</td>
                  <td className={styles.value}>{country.altSpellings}</td>
                </tr>
                <tr>
                  <td className={styles.title}>Population</td>
                  <td>:</td>
                  <td className={styles.value}>
                    {new Intl.NumberFormat().format(country.population)}
                  </td>
                </tr>{" "}
                <tr>
                  <td className={styles.title}>Region</td>
                  <td>:</td>
                  <td className={styles.value}>{country.region}</td>
                </tr>{" "}
                <tr>
                  <td className={styles.title}>Sub region</td>
                  <td>:</td>
                  <td className={styles.value}>{country.subregion}</td>
                </tr>{" "}
                <tr>
                  <td className={styles.title}>Capital</td>
                  <td>:</td>
                  <td className={styles.value}>{country.capital}</td>
                </tr>
                <tr>
                  <td className={styles.title}>Top level domain</td>
                  <td>:</td>
                  <td className={styles.value}>{country.topLevelDomain}</td>
                </tr>
                <tr>
                  <td className={styles.title}>Currencies</td>
                  <td>:</td>
                  <td
                    className={styles.value}
                  >{`${country.currencies[0].code} - ${country.currencies[0].name}`}</td>
                </tr>
                <tr>
                  <td className={styles.title}>Languages</td>
                  <td>:</td>
                  <td className={styles.value}>{getLanguages(country)}</td>
                </tr>{" "}
                <tr>
                  <td className={styles.title}>Border countries</td>
                  <td>:</td>
                  <td className={styles.borderList}>
                    {countriesBorder.length !== "" &&
                      countriesBorder.map((country) => (
                        <Link to={`/country/${country}`} key={country}>
                          <div
                            className={clsx(
                              styles.borderItem,
                              themeContext.theme
                            )}
                          >
                            {country}
                          </div>
                        </Link>
                      ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </ScrollBar>
  );
}
