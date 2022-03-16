import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <div className="card">
      <img src={avatar_url} alt="User avatar" />
      <h3>{login}</h3>
      <button className="btn dark">More</button>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
