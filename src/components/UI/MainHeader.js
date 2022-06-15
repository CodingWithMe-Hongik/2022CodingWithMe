import React, { useState } from "react";

import styles from "./MainHeader.module.css";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";

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
        <NavLink style={{ textDecoration: "none" }} to="/">
          <p>Coding With Me</p>
        </NavLink>
        <img src="/img/SearchIcon.png" alt="Search" onClick={viewSearchModal} />
        {searchModalIsShown && <Search onClose={closeSearchModal} />}
      </div>
      <div className={styles.Navbar}>
        <nav>
          <ul>
            <li>
              <NavLink className={styles.NavLink} to="/programmingLan">
                프로그래밍 언어
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to="/development">
                개발
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to="/db">
                DB
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to="/ai">
                인공지능/딥러닝
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to="/math">
                수학
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to="/etc">
                기타
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
