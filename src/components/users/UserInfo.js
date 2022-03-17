import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserInfo = () => {
  const { user } = useContext(GithubContext);

  const {
    email,
    html_url,
    avatar_url,
    name,
    company,
    blog,
    location,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;

  return (
    <section className="about">
      <div className="user-img">
        <img className="round block" src={avatar_url} alt="user avatar" />
      </div>
      <div className="info">
        {/* Name */}
        <p>
          <strong>
            Name <i className="fa-solid fa-file-signature" />:
          </strong>{" "}
          {name}
        </p>

        {/* Location */}
        {location && (
          <p>
            <strong>
              Location <i className="fa-solid fa-location-dot" />:
            </strong>{" "}
            {location}
          </p>
        )}

        {/* Hireable */}
        <p>
          <strong>
            Hireable <i className="fa-solid fa-person" />:
          </strong>{" "}
          {hireable ? (
            <i className="fa-solid fa-check" />
          ) : (
            <i className="fa-solid fa-xmark" />
          )}
        </p>

        {/* Email */}
        {email && (
          <p>
            <strong>
              Email <i className="fa-solid fa-envelope" />:
            </strong>{" "}
            {email}
          </p>
        )}

        {/* Company */}
        {company && (
          <p>
            <strong>
              Organization <i className="fa-solid fa-building" />:
            </strong>{" "}
            {company}
          </p>
        )}

        {/* Blog */}
        {blog && (
          <p>
            <strong>
              Blog <i className="fa-solid fa-blog" />:
            </strong>{" "}
            {blog}
          </p>
        )}

        {/* Bio */}
        {bio && (
          <p>
            <strong>
              Bio <i className="fa-solid fa-book" />:
            </strong>{" "}
            {bio}
          </p>
        )}

        {/* Numbers */}
        <div className="user-metrics">
          <p className="badge badge-danger">Repositories: {public_repos}</p>
          <p className="badge badge-success">Gists: {public_gists}</p>
          <p className="badge badge-warning">Followers: {followers} </p>
          <p className="badge badge-info">Following: {following} </p>
        </div>

        {/* Visit Github Profile */}
        <button className="visit-profile btn dark">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            Visit Github Profile
          </a>
        </button>
      </div>
    </section>
  );
};

export default UserInfo;
