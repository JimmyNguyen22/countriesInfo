import React from "react";
import "./header.scss";
import SwitchMode from "./SwitchMode";

export default function Header() {
  return (
    <header>
      <span>Where is the world ?</span>
      <SwitchMode></SwitchMode>
    </header>
  );
}
