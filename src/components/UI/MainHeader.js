import React, { useState } from "react";
import SearchIcon from "../../img/SearchIcon.png";

import styles from "./MainHeader.module.css";
import Search from "../Search/Search";

const MainHeader = () => {
  const [searchModalIsShown, setSearchModalIsShown] = useState(false);

  const viewSearchModal = () => {
    setSearchModalIsShown(true);
  };

  const closeSearchModal = () => {
    setSearchModalIsShown(false);
  };

  return (
    <React.Fragment>
      <div className={styles.MainHeader}>
        <p>Coding With Me</p>
        <img src={SearchIcon} alt="Search" onClick={viewSearchModal} />
        {searchModalIsShown && <Search onClose={closeSearchModal} />}
      </div>
      <div className={styles.Navbar}>
        <nav>
          <ul>
            <li>프로그래밍 언어</li>
            <li>개발</li>
            <li>보안</li>
            <li>DB</li>
            <li>인공지능/딥러닝</li>
            <li>수학</li>
            <li>기타</li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
