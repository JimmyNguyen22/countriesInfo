import React, { useEffect } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCountries,
  getCountriesByName,
  getCountryByRegion,
} from "../../Store/actions/countriesAction";
import "./country.scss";
import CountryCard from "./CountryCard";
import Loading from "../../Loading/Loading";

export default function Country() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.Countries.countries); // countries của countriesReducer

  const loading = useSelector((state) => state.Countries.loading);
  const slug = useParams();

  useEffect(() => {
    if (slug.regionName) dispatch(getCountryByRegion(slug.regionName));
    else if (slug.name) dispatch(getCountriesByName(slug.name));
    else dispatch(getCountries());
  }, [dispatch, slug.regionName, slug.name]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
          <div className="countryContainer">
            {countries.map((country, index) => (
              <CountryCard country={country} key={index}></CountryCard>
            ))}
          </div>
        </ScrollBar>
      )}
    </>
  );
}
