import React, { useReducer } from "react";

import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = {
    alert: {},
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: { msg } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ setAlert, alert: state.alert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
