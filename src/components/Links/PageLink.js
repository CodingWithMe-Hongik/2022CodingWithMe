import React from "react";
import styles from "./PageLink.module.css";

const PageLink = () => {
  return (
    <React.Fragment>
      <div className={styles.Package}>
        <div className={styles.PageLink}>1</div>
        <div className={styles.PageLink}>2</div>
        <div className={styles.PageLink}>3</div>
        <div className={styles.PageLink}>4</div>
        <div className={styles.PageLink}>5</div>
        <div className={styles.PageLink}>6</div>
      </div>
    </React.Fragment>
  );
};

export default PageLink;
