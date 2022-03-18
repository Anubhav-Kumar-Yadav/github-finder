import React from "react";

import Users from "../users/Users";
import Alert from "../layout/Alert";
import SearchUser from "../users/SearchUser";
import AlertState from "../../context/alert/AlertState";

const Home = () => {
  return (
    <div className="container">
      <AlertState>
        <Alert />
        <SearchUser />
      </AlertState>
      <Users />
    </div>
  );
};

export default Home;
