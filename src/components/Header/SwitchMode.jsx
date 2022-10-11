import React from "react";
import { RiMoonFill } from "react-icons/ri";
import styles from "./switchStyle.module.scss";

export default function SwitchMode() {
  return (
    <div className={styles.toggleBtn}>
      <input type="checkbox" />
      <div className={styles.icon}>
        <RiMoonFill></RiMoonFill>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
}
