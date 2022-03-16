import {
  SET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_USER,
  CLEAR_USER,
} from "../types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.payload, loading: false };
    }

    case CLEAR_USERS: {
      return { ...state, users: [] };
    }

    case SET_LOADING: {
      return { ...state, loading: true };
    }

    case SET_USER: {
      return { ...state, user: action.payload, loading: false };
    }

    case CLEAR_USER: {
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

export default GithubReducer;
