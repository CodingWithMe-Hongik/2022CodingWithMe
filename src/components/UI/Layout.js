import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Layout}>
        <MainHeader />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
