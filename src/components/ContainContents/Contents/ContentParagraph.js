import React from "react";
import styles from "./ContentParagraph.module.css";

const ContentParagraph = (props) => {
  return (
    <React.Fragment>
      {props.data.map((paragraph) => (
        <div className={styles.Paragraph}>
          {paragraph.title === "blank" ? "" : <p>{paragraph.title}</p>}
          {paragraph.url === "blank" ? (
            ""
          ) : (
            <img src={paragraph.url} alt="img" />
          )}
          {paragraph.contents.map((content) => (
            <p>{content}</p>
          ))}
        </div>
      ))}
    </React.Fragment>
  );
};

export default ContentParagraph;
