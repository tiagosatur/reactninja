import React from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info d-flex flex-column flex-row-sm justify-content-between-sm p-01'>
    <div className='avatar d-flex justify-content-center justify-content-between-sm w-30-sm'>
      {/* <img src="https://avatars1.githubusercontent.com/u/24196412?v=4" alt="Avatar"/> */}
      <img src={userinfo.image} alt="Avatar"/>
    </div>

    <div className='user-data d-flex flex-column w-70-sm'>
      <h2 className='d-flex justify-content-center'>
        <a target='_blank' className=' text-featured' title='Visit my Github profile' href="https://github.com/tiagosatur">
          {userinfo.name}
        </a>
      </h2>

      <ul className='repos-info d-flex flex-column align-items-center fs-14 text-featured'>
        <li className='d-flex flex-column justify-content-center'>Repositories: {userinfo.repos}</li>
        <li>Followers: {userinfo.followers}</li>
        <li>Following: {userinfo.following}</li>
      </ul>
    </div>
  </div>
)

export default UserInfo
