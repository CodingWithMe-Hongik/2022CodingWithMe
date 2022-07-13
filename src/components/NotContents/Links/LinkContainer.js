import React from "react";
import styles from "./LinkContainer.module.css";
import useGetItems from "../../../hooks/useGetItems";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

const LinkContainer = () => {
  const params = useParams();

  const { loading, error, data, fetchData } = useGetItems();

  useEffect(() => {
    fetchData(
      `https://codingwith-3cbaf-default-rtdb.firebaseio.com/detail/${params.sortId}/${params.detailId}.json`
    );
  }, [params]);

  let content;
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
        <div className={styles.ContainerBox}>
          {data.map((el, index) => {
            const marginBottomSize =
              (el.title.split("\n").length - 1) * 36.5 + 50;
            return (
              <a
                rel="noreferrer"
                key={index}
                target="_blank"
                href={el.url}
                className={styles.LinkContainer}
                style={{ marginBottom: `${marginBottomSize}px` }}
              >
                <img src={el.img} alt="img" />
                <div>
                  {el.title.split("\n").map((el) => (
                    <p>{el}</p>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </Fragment>
    );
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default LinkContainer;
