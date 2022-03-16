import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="loading">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
