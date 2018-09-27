import React, { Component } from 'react';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import Actions from './components/Actions';
import Repos from './components/Repos';
import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
