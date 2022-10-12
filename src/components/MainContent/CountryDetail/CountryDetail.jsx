import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { getCountryByName } from "../../Store/actions/countriesAction";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import "./countryDetail.scss";
import CountryInfo from "./CountryInfo.jsx";

export default function CountryDetail() {
  const themeContext = useContext(ThemeContext);
  const country = useSelector((state) => state.Countries.country);
  const loading = useSelector((state) => state.Countries.loading);

  const slug = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]);

  return (
    <div className="wrapper">
      <div
        className={`gobackBtn ${themeContext.theme}`}
        onClick={() => navigate(-1)}
      >
        Go back
      </div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="countryContainer ">
          <div className="flagCountry">
            <img
              src={
                country
                  ? country.flag
                  : "https://via.placeholder.com/300x200?text=Image+Error"
              }
              alt="flag"
            />
          </div>
          <CountryInfo></CountryInfo>
        </div>
      )}
    </div>
  );
}
