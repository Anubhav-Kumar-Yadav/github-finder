import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";

const User = () => {
  const { fetchGithubUserProfile, user, loading } = useContext(GithubContext);
  const { username } = useParams();

  useEffect(() => {
    fetchGithubUserProfile(username);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  else {
    return (
      <div className="user">
        <button>Go Back</button>
        <section className="about">{user.login}</section>
      </div>
    );
  }
};

export default User;
