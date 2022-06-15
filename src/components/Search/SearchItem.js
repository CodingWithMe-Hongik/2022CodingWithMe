import React from "react";
import styles from "./SearchItem.module.css";
import { NavLink } from "react-router-dom";

const SearchItem = (props) => {
  return (
    <React.Fragment>
      {props.data.map((item, index) => {
        return (
          <li className={styles.listContent} key={index}>
            <NavLink
              className={styles.link}
              to={item.url}
              onClick={props.onClose}
            >
              <p>{item.title}</p>
            </NavLink>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default SearchItem;
