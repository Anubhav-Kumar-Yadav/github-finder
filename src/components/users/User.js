import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

const User = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const { fetchGithubUserProfile, clearUser, loading } = useContext(
    GithubContext
  );

  useEffect(() => {
    fetchGithubUserProfile(username);
    return () => clearUser();
    // eslint-disable-next-line
  }, []);

  const onClick = () => navigate("/");

  if (loading) return <Spinner />;
  else {
    return (
      <div className="user">
        <button className="btn light" onClick={onClick}>
          Go Back
        </button>
        <UserInfo />
        <UserRepos />
      </div>
    );
  }
};

export default User;
