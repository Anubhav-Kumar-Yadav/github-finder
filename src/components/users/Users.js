import React, { useContext, useEffect } from "react";

import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const { getGithubUsers, clearUsers, users, loading } = useContext(
    GithubContext
  );

  useEffect(() => {
    getGithubUsers();
    return () => clearUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
