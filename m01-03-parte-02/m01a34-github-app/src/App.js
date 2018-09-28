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

    }
  }

  render() {
    return (
      <AppContent />
    );
  }
}

export default App;
