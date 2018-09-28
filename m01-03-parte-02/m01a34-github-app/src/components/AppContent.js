import React from 'react'
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

const AppContent = () => (
  <div className="App">

      <div className='container'>


        <Search />

        <UserInfo />
        <Actions />
        <Repos
          className='repos p-01'
          title='Repositories'
          repos={[{
            name: 'Repository name',
            link: '#'
            },{
            name: 'Repository name',
            link: '#'
          }]}
          />

        <Repos
          className='stared p-01'
          title='Favorites'
          repos={[
            {
              name: 'Stared repository',
              link: '#'
            },
            {
              name: 'Stared repository',
              link: '#'
            }
          ]}
        />
      </div>
  </div>
)

export default AppContent
