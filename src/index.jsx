import React from "react";
import ReactDOM from "react-dom";

// local component

import App from "./App";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
