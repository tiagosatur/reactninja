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

  //componentDidMount e setTimeout executam somente uma vez, então uso setInterval
  componentDidMount () {
    const timer = setInterval (() =>
      this.setState ({
      time: this.state.time + 1
    }), 1000)
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
