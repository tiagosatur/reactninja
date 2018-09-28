import React, { Component } from 'react';
import AppContent from './components/AppContent';
import './App.css';

/*
** Presentational/Dumb components
Componentes que apenas apresentam as informações,
 não possuem e nem modificam estados, não sabem o que devem fazer.
 A única coisa que sabem é que devem renderizar propriedades

Smart Components
  Possuem e manipulam estado

*/


class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        image: 'https://dummyimage.com/200x200/ffffff/000000',
        name: 'Tiago Satur',
        repos: 25,
        followers: 6,
        following: 13,
      },
      repos: [
        {
          name: 'Repository name',
          link: '#'
        },
        {
        name: 'Repository name',
        link: '#'
        }
      ],
      stared: [
        {
          name: 'Stared repository',
          link: '#'
        },
        {
          name: 'Stared repository',
          link: '#'
        }
      ],

    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        stared={this.state.stared}
      />
    );
  }
}

export default App;
