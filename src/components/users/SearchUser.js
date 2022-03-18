import React, { useContext, useState } from "react";

import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const { searchUsersWithName, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0) setAlert("Please Enter Something...");
    else searchUsersWithName(username);
    setUsername("");
  };

  const onChange = (e) => {
    setUsername(e.target.value.trim());
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
      {users.length !== 0 && (
        <button className="btn dark" onClick={clearUsers}>
          Clear
        </button>
      )}
    </>
  );
};

export default SearchUser;
