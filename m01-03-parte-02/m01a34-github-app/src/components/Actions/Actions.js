import React from 'react'
import propTypes from 'prop-types'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions d-flex justify-content-between p-01'>
    <button onClick={getRepos}>See repositories</button>
    <button onClick={getStarred}>See favorites</button>
  </div>
)


Actions.propTypes = {
  getRepos: propTypes.func.isRequired,
  getStarred: propTypes.func.isRequired
}
export default Actions
