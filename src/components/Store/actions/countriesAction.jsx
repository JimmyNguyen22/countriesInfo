import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_REGION,
  GET_COUNTRIES_BY_NAME,
  SET_LOADING,
} from "../types";

const countriesApi = "https://restcountries.com/v2";

export const getCountries = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + "/all")
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRIES, payload: countries });
    })
    .catch((error) => console.log("get country api err", error));
};

export const getCountryByName = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  await axios
    .get(`${countriesApi}/name/${name}`)
    .then((res) => {
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRY_BY_NAME, payload: res.data[0] });
    })
    .catch((error) => console.log("get country by name err", error));
};

export const getCountryByRegion = (regionName) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  await axios
    .get(`${countriesApi}/region/${regionName}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRY_BY_REGION, payload: countries });
    })
    .catch((error) => console.log("get country by region err", error));
};

export const getCountriesByName = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(`${countriesApi}/name/${name}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countries });
    })
    .catch((error) => console.log("get countries by name err", error));
};
