import React, { useContext } from "react";

import GithubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

const UserRepos = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className="user-repos">
      <h2>Repositories</h2>

      <div className="repos">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
