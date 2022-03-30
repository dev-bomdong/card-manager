import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {true && <button className={styles.logOutBtn}>Logout</button>}
      <h1 className={styles.title}>Card Manager</h1>
    </header>
  );
};

export default Header;
