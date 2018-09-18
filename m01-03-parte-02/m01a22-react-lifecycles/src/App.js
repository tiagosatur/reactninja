'use strict'
import React, { Component } from 'react'
import Timer from './timer'
import './style/main.sass'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  // Temos os métodos de montagem/desmontagem e os métodos de atualização.
  // Os primeiros são executados quando o componente é montado, executam uma única vez.
  // Os últimos são executados quando o componente é de fato atualizado. Executam sempre que o componente for renderizado.

  componentWillMount() {
    //Esse método executa do lado do servidor, não se deve fazer manipulação de DOM nele.
    console.log('componentWillMount App --')
  }

  componentDidMount() {
    // Muito utilizado para bibliotecas externas que manipulam o DOM
    console.log('componentDidMount App = montar significa que está no DOM')
  }

  render() {
    console.info('renderizou App')
    return (
      <div className="container">
        <Timer time={this.state.time} />

        <button
          onClick={() => {
            this.setState({
              // showTimer: !this.state.showTimer
              time: this.state.time + 10
            })
          }}
          >
            Change props
        </button>
      </div>
    )
  }
}

export default App
