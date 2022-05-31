import React from "react";
import styles from "./LinkContainer.module.css";

const LinkContainer = () => {
  return (
    <React.Fragment>
      <div className={styles.ContainerBox}>
        <div className={styles.LinkContainer}>
          <div>1</div>
        </div>
        <div className={styles.LinkContainer}>
          <div>2</div>
        </div>
        <div className={styles.LinkContainer}>
          <div>3</div>
        </div>
        <div className={styles.LinkContainer}>
          <div>4</div>
        </div>
        <div className={styles.LinkContainer}>
          <div>5</div>
        </div>
        <div className={styles.LinkContainer}>
          <div>6</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkContainer;
