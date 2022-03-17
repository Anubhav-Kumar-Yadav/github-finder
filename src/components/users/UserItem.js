import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/user/${login}`);
  };

  return (
    <div className="card">
      <img className="round block" src={avatar_url} alt="User avatar" />
      <h3>{login}</h3>
      <button className="btn block dark" onClick={onClick}>
        More
      </button>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
