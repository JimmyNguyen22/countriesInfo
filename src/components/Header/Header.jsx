import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "./header.scss";
import SwitchMode from "./SwitchMode";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={themeContext.theme}>
      <Link to="/">
        <span>Where is the world ?</span>
      </Link>
      <SwitchMode></SwitchMode>
    </header>
  );
}
