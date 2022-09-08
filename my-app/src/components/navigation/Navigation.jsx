import React from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <div className={styles.navigationCSS}>
      Navigation
      <img src="" alt="" />
      <ul className={styles.navigationList}>
        {navItems.map((item) => (
          <li className={styles.navigationItem} key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
