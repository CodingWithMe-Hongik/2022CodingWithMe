import React from "react";
import styles from "./ContentParagraph.module.css";

const ContentParagraph = (props) => {
  return (
    <React.Fragment>
      {props.data.map((paragraph, index) => {
        return (
          <div className={styles.Paragraph} key={index}>
            {paragraph.title === "blank" ? "" : <p>{paragraph.title}</p>}
            {paragraph.url === "blank" ? (
              ""
            ) : (
              <img src={paragraph.url} alt="img" />
            )}
            {paragraph.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ContentParagraph;
