import React, { Component } from "react";

// import "./styles.scss";
import styles from "./styles.scss";
// import "./styles.css";

export default class Head extends Component {
  render() {
    return (
      <div>
        <p className="top">head</p>
        {/* <p className={styles.top2}>head</p> */}
        <div className={styles.top}>toptoptoptop</div>
      </div>
    );
  }
}
