import React from "react";

import Users from "../users/Users";
import SearchUser from "../users/SearchUser";

const Home = () => {
  return (
    <div className="container">
      <SearchUser />
      <Users />
    </div>
  );
};

export default Home;
