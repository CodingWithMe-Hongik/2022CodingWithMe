import React, { Fragment } from "react";
import styles from "./PageLink.module.css";
import { NavLink } from "react-router-dom";

const PageLink = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Package}>
        {props.data.map((link) => (
          <Fragment>
            <NavLink to={link.url} className={styles.PageLink}>
              <img src={link.img} alt="img" />
              <div>
                <p>{link.title}</p>
              </div>
            </NavLink>
          </Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PageLink;
