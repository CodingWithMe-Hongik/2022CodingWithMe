import React from "react";
import styles from "./ContentParagraph.module.css";

const ContentParagraph = (props) => {
  return (
    // <React.Fragment>
    //   <div className={styles.Paragraph}>
    //     <p>{props.title}</p>
    //     <img href={props.img} alt={props.title} />
    //     <p>{props.content}</p>
    //   </div>
    // </React.Fragment>
    <React.Fragment>
      <div className={styles.Paragraph}>
        <p>asdasdasd</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
          alt="asdasdasd"
        />
        <p>sadasdjlasdjlasjdlaksjdlajsdlasjldjasldjlas</p>
      </div>
    </React.Fragment>
  );
};

export default ContentParagraph;
