import React, { Component } from 'react';
import Plugin from './components/Plugin/Plugin'
import './style/App.css';

class App extends Component {
  /*
    Como utilizamos bibliotecas de terceiros junto com react?
    Já que com react, não precisamos nos preocupar com manipulação de DOM,
    mas somente com manipulação de dados.
  */

  render() {
    return (
      <div className='container' style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Third party libs with React</h3>

        <Plugin />
      </div>
    );
  }
}

export default App;
