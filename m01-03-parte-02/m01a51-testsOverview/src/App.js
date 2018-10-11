import React, { Component } from 'react';
import Sum from './components/sum/Sum'
import SumTest from './components/sum/SumTest'
import './style/App.css';

class App extends Component {
  /*

  */

  render() {
    return (
      <div className='container' style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Tests Overview</h3>
      <h3>Realiza a soma</h3>

        2 + 3 = <Sum x={2} y={3} />
        <SumTest />

        <h2>Test Driven Development (TDD)</h2>
        <p>Desenvolver a aplicação guiado por testes. O TDD segue 3 passos</p>

        <h3>1) RED</h3>
        <p>Escrever o teste para uma aplicação inexistente e executar o teste. Ele vai quebrar.</p>

        <h3>1) GREEN</h3>
        <p></p>
      </div>
    );
  }
}

export default App;
