import React, { Component } from "react";

import lessStyles from "./styles.less";
import scssStyles from "./styles.scss";

export default class Head extends Component {
  render() {
    return (
      <div>
        <p className="top">head</p>
        <p className={scssStyles.top2}>scssStyles scssStyles scssStyles</p>
        <div className={lessStyles.top}>less less less</div>
      </div>
    );
  }
}
