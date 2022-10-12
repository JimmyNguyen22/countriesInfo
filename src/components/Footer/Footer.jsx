import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "./footer.scss";

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  return (
    <footer className={themeContext.theme}>
      <h4>Copyright &copy; Jimmy</h4>
      <a target="_blank" href="https://github.com/JimmyNguyen22">
        https://github.com/JimmyNguyen22
      </a>
      <p>vphu456@gmail.com</p>
    </footer>
  );
}
