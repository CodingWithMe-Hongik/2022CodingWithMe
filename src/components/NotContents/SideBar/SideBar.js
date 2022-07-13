import styles from "./SideBar.module.css";
import useGetItems from "../../../hooks/useGetItems";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { loading, error, data, fetchData } = useGetItems();
  const params = useParams();

  let content;

  useEffect(() => {
    fetchData(
      `https://codingwithme-f5889-default-rtdb.firebaseio.com/main/${params.sortId}.json`
    );
  }, [params]);

  if (loading) {
    content = (
      <p style={{ fontSize: "40px", textAlign: "center" }}>Loading...</p>
    );
  }
  if (error) {
    content = <p style={{ fontSize: "40px", textAlign: "center" }}>Error</p>;
  }
  if (data) {
    content = (
      <Fragment>
        <div className={styles.SideBar}>
          <ul className={styles.List}>
            {data.links.map((el, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/${params.sortId}/${el.url}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p>{el.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }

  return content;
};
export default SideBar;
