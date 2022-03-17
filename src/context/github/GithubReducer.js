import { SET_USERS, CLEAR_USERS, SET_LOADING, SET_USER } from "../types";

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

    default:
      return state;
  }
};

export default GithubReducer;
