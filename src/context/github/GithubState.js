import React, { useReducer } from "react";
import axios from "axios";

import {
  SET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_USER,
  CLEAR_USER,
} from "../types";

import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";

const GithubState = (props) => {
  const initialState = {
    loading: false,
    users: [],
    user: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getGithubUsers = async () => {
    dispatch({ type: SET_LOADING });
    dispatch({ type: CLEAR_USER });

    const res = await axios.get(`https://api.github.com/users`);

    dispatch({
      type: SET_USERS,
      payload: res.data,
    });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const searchUsersWithName = async (username) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );

    dispatch({ type: SET_USERS, payload: res.data.items });
  };

  const fetchGithubUserProfile = async (username) => {
    dispatch({ type: SET_LOADING });

    console.log(username);

    const res = await axios.get(`https://api.github.com/users/${username}`);

    console.log(res);
    dispatch({ type: SET_USER, payload: res.data });
  };

  return (
    <GithubContext.Provider
      value={{
        getGithubUsers,
        clearUsers,
        searchUsersWithName,
        fetchGithubUserProfile,
        users: state.users,
        loading: state.loading,
        user: state.user,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
