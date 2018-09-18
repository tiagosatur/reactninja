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

  componentWillMount() {
    //Esse método executa do lado do servidor, não se deve fazer manipulação de DOM nele.
    console.log('componentWillMount --')
  }

  componentDidMount() {
    // Muito utilizado para bibliotecas externas que manipulam o DOM
    console.log('componentDidMount = montar significa que está no DOM')
  }

  render() {
    console.info('renderizou')
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
