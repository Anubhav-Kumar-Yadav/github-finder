import React, { useContext, useState } from "react";

import GithubContext from "../../context/github/GithubContext";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const { searchUsersWithName, clearUsers } = useContext(GithubContext);

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsersWithName(username);
    setUsername("");
  };

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search User"
          onChange={(e) => onChange(e)}
          name="username"
          value={username}
        />
        <input type="submit" value="Search" />
      </form>
      <button className="btn dark" onClick={clearUsers}>
        Clear
      </button>
    </>
  );
};

export default SearchUser;
