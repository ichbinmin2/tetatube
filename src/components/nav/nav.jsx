import React, { Component } from "react";
import styles from "../nav/nav.module.css";

class Nav extends Component {
  inputRef = React.createRef;
  // onSaerch = (event) => {
  //   event.preventDefault();
  //   const searchText = this.inputRef.current.value;
  //   searchText && this.props.onAdd(searchText);
  //   this.inputRef.current.value = "";
  // };

  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.titleBox}>
          <img className={styles.logo} src="/images/logo.png" alt="logo" />
          <span className={styles.title}>TetaTube</span>
        </div>

        <form className={styles.form}>
          <input className={styles.input} placeholder="Seach" />
          <img className={styles.icon} src="/images/search.png" alt="icon" />
        </form>
      </nav>
    );
  }
}
export default Nav;
