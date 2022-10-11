import React, { useContext, useEffect, useRef, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import styles from "./switchStyle.module.scss";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "../../App.scss";

export default function SwitchMode() {
  const themeContext = useContext(ThemeContext);

  const refInput = useRef();
  const refCircle = useRef();
  const refToggle = useRef();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    refInput.current.checked = isDark;
  }, [isDark]);

  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.toggleTheme();
  };

  useEffect(() => {
    const changeBackgroundBtn = () => {
      if (isDark) {
        refCircle.current.style.background = "#3f607c";
        refToggle.current.style.background = "#fff";
      } else {
        refCircle.current.style.background = "#fff";
        refToggle.current.style.background = "#2b6da6";
      }
    };
    changeBackgroundBtn();

    document.addEventListener("resize", changeBackgroundBtn);
    return () => {
      document.removeEventListener("resize", changeBackgroundBtn);
    };
  }, [isDark]);

  return (
    <div className={styles.toggleBtn} ref={refToggle} onClick={handleToggle}>
      <input type="checkbox" ref={refInput} />
      <div className={styles.icon}>
        {isDark ? <RiMoonFill></RiMoonFill> : <BsFillSunFill></BsFillSunFill>}
      </div>
      <div className={styles.circle} ref={refCircle}></div>
    </div>
  );
}
