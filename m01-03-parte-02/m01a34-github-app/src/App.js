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
              className='repos'
              title='Repositórios'
              repos={[{
                name: 'Nome do repositório',
                link: '#'
                },{
                name: 'Nome do repositório',
                link: '#'
              }]}
              />



            <div className='starred'>
              <h2>Favoritos:</h2>
              <ul>
                <li><a href="#">Nome do favorito</a></li>
                <li><a href="#">Nome do favorito</a></li>
                <li><a href="#">Nome do favorito</a></li>
                <li><a href="#">Nome do favorito</a></li>
              </ul>
            </div>

          </div>

      </div>
    );
  }
}

export default App;
