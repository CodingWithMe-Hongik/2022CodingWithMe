import React from "react";
import styles from "./SearchItem.module.css";

const SearchItem = () => {
  return (
    <React.Fragment>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / C++</p>
      </li>
      <li className={styles.listContent}>
        <p>인공지능/딥러닝 / 21312312312312</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 1</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 2</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 3</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 4</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 5</p>
      </li>
      <li className={styles.listContent}>
        <p>프로그래밍 언어 / 6</p>
      </li>
    </React.Fragment>
  );
};

export default SearchItem;
