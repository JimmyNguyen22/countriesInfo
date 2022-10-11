import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "./header.scss";
import SwitchMode from "./SwitchMode";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={themeContext.theme}>
      <span>Where is the world ?</span>
      <SwitchMode></SwitchMode>
    </header>
  );
}
