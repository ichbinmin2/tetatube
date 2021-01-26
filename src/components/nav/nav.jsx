import React, { useRef } from "react";
import styles from "../nav/nav.module.css";

const Nav = ({ onSearch }) => {
  const inputRef = useRef();
  const handlerSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = "";
  };
  const onClick = () => {
    handlerSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handlerSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <span className={styles.title}>TETATUBE</span>
      </div>

      <div className={styles.form}>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="Seach"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          <img className={styles.icon} src="/images/search.png" alt="icon" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
