import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className='user-info'>
            {/* <img src="https://avatars1.githubusercontent.com/u/24196412?v=4" alt="Avatar"/> */}
            <img src="https://dummyimage.com/400x400/ffffff/000000" alt="Avatar"/>
            <h2>
              <a href="https://github.com/tiagosatur">Tiago Satur</a>
            </h2>
            <ul className='repos-info'>
              <li>Repositórios: 22</li>
              <li>Seguidores: 6</li>
              <li>Seguindo: 13</li>
            </ul>

            <div className='actions'>
              <button>Ver repositórios</button>
              <button>Ver favoritos</button>
            </div>

            <div className='repos'>
              <h2>Repositórios:</h2>
              <ul>
                <li><a href="#">Nome do repositório</a></li>
                <li><a href="#">Nome do repositório</a></li>
                <li><a href="#">Nome do repositório</a></li>
                <li><a href="#">Nome do repositório</a></li>
              </ul>
            </div>

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
