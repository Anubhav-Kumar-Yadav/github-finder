import {
  SET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_USER,
  SET_USER_REPOS,
  CLEAR_USER,
  CLEAR_USER_REPOS,
} from "../types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.payload };
    }

    case CLEAR_USERS: {
      return { ...state, users: [] };
    }

    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }

    case SET_USER: {
      return { ...state, user: action.payload };
    }

    case CLEAR_USER: {
      return { ...state, user: {} };
    }

    case SET_USER_REPOS: {
      return { ...state, repos: action.payload };
    }

    case CLEAR_USER_REPOS: {
      return { ...state, repos: [] };
    }

    default:
      return state;
  }
};

export default GithubReducer;
