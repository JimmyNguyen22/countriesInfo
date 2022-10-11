import React, { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./filter.module.scss";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import Options from "./Option/Options";
import { useParams } from "react-router-dom";

export default function Filter(props) {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState("All");

  const handleOptions = (e) => {
    if (refSelect.current)
      setIsShowOptions(refSelect.current.contains(e.target));
  };

  useEffect(() => {
    regionName ? setValueOption(regionName) : setValueOption("All");
  }, [regionName]);

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);
      return () => {
        document.removeEventListener("click", handleOptions);
      };
    }
  }, [isShowOptions]);

  return (
    <div className={styles.filter}>
      <h3>Filter by regions:</h3>
      <div className={styles.selectFilter}>
        <div
          className={`${styles.select} ${themeContext.theme}`}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <FaChevronDown></FaChevronDown>
        </div>
        <Options isShowOptions={isShowOptions}></Options>
      </div>
    </div>
  );
}
