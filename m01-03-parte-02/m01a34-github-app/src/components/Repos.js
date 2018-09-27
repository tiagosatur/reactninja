import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h3>{title}:</h3>
    <ul>
      {repos.map((repo) => (
        <li key={repo.link}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.PropTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
