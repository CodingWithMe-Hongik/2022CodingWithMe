import React from "react";
import styles from "./RowLayout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Layout}>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
