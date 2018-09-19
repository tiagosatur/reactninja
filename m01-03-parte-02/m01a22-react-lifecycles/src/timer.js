'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  // Precisamos que o tempo seja atualizado a cada 1s, por meio do state
  constructor () {
    super ()
      this.state = {
      time: 0
    }

    this.timer
  }

  componentWillReceiveProps(nextProps) {
    // Pode-se usar o this.setState nesse lifecycle, pois sabemos que aqui é o moment
    // em que o componente vai receber novas propriedades, então atualizamos o state
    // antes que o componente seja renderizado
    console.log('componentWillReceiveProps Timer - ', this.props, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate Timer - ', this.props, nextProps)
    // return true
    return this.state.time !== nextProps.time
  }

  componentWillUpdate(nextProps, nextState) {
    // Executa um pouco antes do componente renderizar novamente
    // não pode usar o this.setState
    //
    console.log('componentWillUpdate Timer - ', this.props, nextProps)
  }

  //componentDidMount e setTimeout executam somente uma vez, então uso setInterval
  componentDidMount () {
    const timer = setInterval (() =>
      this.setState ({
      time: this.state.time + 1
    }), 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate Timer -- ', this.props, prevProps)
  }

  // Se vc tem alguma manipulação de DOM,
  // ou atrelou algum evento manualmente no componentDidMount (como um timer)
  // você pode remover esses eventos quando desmontar for o componente no componentWillUnmount
  // Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
