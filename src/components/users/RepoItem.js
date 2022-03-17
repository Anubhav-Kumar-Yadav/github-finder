import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    forks_count,
    watchers_count,
    default_branch,
    open_issues_count,
  } = repo;

  return (
    <div className="repo-item">
      <p className="repo-name">
        <span>{name}</span>{" "}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </p>
      <div className="repo-metrics">
        <div className="badge badge-danger">
          Forks <i className="fa-solid fa-code-fork" />: {forks_count}
        </div>
        <div className="badge badge-success">
          Watchers <i className="fa-solid fa-eye" />: {watchers_count}
        </div>
        <div className="badge badge-warning">
          Branch <i className="fa-solid fa-code-branch"></i>: {default_branch}
        </div>
        <div className="badge badge-info">
          Issues <i className="fa-solid fa-folder-open" />: {open_issues_count}
        </div>
      </div>
      {description && (
        <p>
          <span className="repo-desc">Repository description:</span>{" "}
          {description}
        </p>
      )}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
