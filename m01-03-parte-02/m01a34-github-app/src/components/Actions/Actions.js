import React from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions d-flex justify-content-between p-01'>
    <button onClick={getRepos}>See repositories</button>
    <button onClick={getStarred}>See favorites</button>
  </div>
)

export default Actions
