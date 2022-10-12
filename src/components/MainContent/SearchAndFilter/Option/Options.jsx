import React, { useContext, useEffect, useRef } from "react";
import { GiEarthAsiaOceania, GiWorld } from "react-icons/gi";
import {
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
} from "react-icons/fa";
import Option from "./Option";
import "./options.scss";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";

const RegionsList = [
  { icon: GiWorld, value: "All" },
  { icon: FaGlobeAfrica, value: "Africa" },
  { icon: FaGlobeAmericas, value: "Americas" },
  { icon: FaGlobeAsia, value: "Asia" },
  { icon: FaGlobeEurope, value: "Europe" },
  { icon: GiEarthAsiaOceania, value: "Oceania" },
];

export default function Options({ isShowOptions }) {
  const themeContext = useContext(ThemeContext);
  const refOptions = useRef(null);

  useEffect(() => {
    const ShowOptions = () => {
      if (isShowOptions) {
        refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
        refOptions.current.style.transform = "scaleY(1)";
      } else {
        refOptions.current.style.maxHeight = "0";
        refOptions.current.style.transform = "scaleY(0)";
      }
    };
    ShowOptions();

    document.addEventListener("resize", ShowOptions);
    return () => {
      document.removeEventListener("resize", ShowOptions);
    };
  }, [isShowOptions]);

  return (
    <div className={`list ${themeContext.theme}`} ref={refOptions}>
      {RegionsList.map((region) => (
        <Option key={region.value} region={region} />
      ))}
    </div>
  );
}
