import React, { useReducer } from "react";
import axios from "axios";

import { SET_USERS, CLEAR_USERS, SET_LOADING, SET_USER } from "../types";

import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";

const GithubState = (props) => {
  const initialState = {
    loading: false,
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = (val) => dispatch({ type: SET_LOADING, payload: val });

  const getGithubUsers = async () => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users`);

    dispatch({
      type: SET_USERS,
      payload: res.data,
    });

    setLoading(false);
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const searchUsersWithName = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );

    dispatch({ type: SET_USERS, payload: res.data.items });
    setLoading(false);
  };

  const fetchGithubUserProfile = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({ type: SET_USER, payload: res.data });
    setLoading(false);
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
