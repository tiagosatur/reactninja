'use strict'

import React, { Component } from 'react'

class Timer extends Component {
	//	Precisamos que o tempo seja atualizado a cada 1s, por meio do state
	constructor() {
		super()
		this.state = {
			time: 0
		}
	}

	//componentDidMount e setTimeout executam somente uma vez, então uso setInterval
	componentDidMount() {
		setInterval(
			() =>
				this.setState({
					time: this.state.time + 1
				}),
			1000
		)
	}

	render() {
		return <div>Timer: {this.state.time}</div>
	}
}

export default Timer
