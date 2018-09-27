import React from 'react'

const UserInfo = () => (
  <div className='user-info d-flex flex-column flex-row-sm justify-content-between-sm p-01'>
    <div className='avatar d-flex justify-content-center justify-content-between-sm w-30-sm'>
      {/* <img src="https://avatars1.githubusercontent.com/u/24196412?v=4" alt="Avatar"/> */}
      <img src="https://dummyimage.com/200x200/ffffff/000000" alt="Avatar"/>
    </div>

    <div className='user-data d-flex flex-column w-70-sm'>
      <h2 className='d-flex justify-content-center'>
        <a target='_blank' title='Visit my Github profile' href="https://github.com/tiagosatur">Tiago Satur</a>
      </h2>

      <ul className='repos-info d-flex flex-column align-items-center'>
        <li className='d-flex flex-column justify-content-center'>Repositórios: 22</li>
        <li>Seguidores: 6</li>
        <li>Seguindo: 13</li>
      </ul>
    </div>
  </div>
)

export default UserInfo
