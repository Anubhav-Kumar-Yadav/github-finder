import React, { useContext, useEffect } from "react";

import GithubContext from "../../context/github/GithubContext";

const User = () => {
  const { fetchGithubUserProfile } = useContext(GithubContext);

  useEffect(() => {
    fetchGithubUserProfile("mojombo");
    // eslint-disable-next-line
  }, []);

  return <div>User</div>;
};

export default User;
