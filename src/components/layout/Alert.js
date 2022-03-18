import React, { useContext } from "react";

import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert.msg) return <></>;
  else
    return (
      <div className="alert">
        <i className="fa-solid fa-circle-info" /> {alert.msg}
      </div>
    );
};

export default Alert;
