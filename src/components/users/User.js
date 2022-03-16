import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import GithubContext from "../../context/github/GithubContext";

const User = () => {
  const { fetchGithubUserProfile } = useContext(GithubContext);
  const { username } = useParams();

  useEffect(() => {
    fetchGithubUserProfile(username);
    // eslint-disable-next-line
  }, []);

  return <div>User</div>;
};

export default User;
