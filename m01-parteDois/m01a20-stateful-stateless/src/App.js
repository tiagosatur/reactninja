'use strict'
import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import './style/main.sass'

class App extends Component {
	constructor() {
		super()
		this.state = {
			color: 'green'
		}
	}
	render() {
		return (
			<div className="container">
				<Square color={this.state.color} />

				<Button color="red">Vermelho</Button>
				<Button>Verde</Button>
				<Button>Azul</Button>
			</div>
		)
	}
}

export default App
