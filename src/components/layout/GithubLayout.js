import React from "react";
import { Outlet } from "react-router-dom";

import GithubState from "../../context/github/GithubState";

const GithubLayout = () => {
  return (
    <GithubState>
      <Outlet />
    </GithubState>
  );
};

export default GithubLayout;
