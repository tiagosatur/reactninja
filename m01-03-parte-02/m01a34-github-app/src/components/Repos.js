import React from 'react'
import propTypes from 'prop-types'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h3>{title}:</h3>
    <ul>
      {repos.map((repo, i) => (
        <li key={i}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: propTypes.string,
  title: propTypes.string.isRequired,
  repos: propTypes.array
}

export default Repos
