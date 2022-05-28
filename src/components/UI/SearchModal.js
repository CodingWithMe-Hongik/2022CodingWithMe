import React from "react";
import ReactDOM from "react-dom";

const ErrorModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div>1</div>,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
