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

	handleClick(buttonColor) {
		this.setState({color: '#000'})
	}
	// Como o nome da propriedade é o mesmo nome da variavel color, posso usar só color ES6
	render() {
		return (
			<div className="container">
				<Square color={this.state.color} />

				{['red', 'green', 'blue'].map((color) => (
					<Button
						key={color}
						onClick={ (e) => this.setState( {color})}>
						{color}
					</Button>
				))}


					<Button onClick={(e) => this.handleClick('pink')}
					>
					Pink
					</Button>
			</div>
		)
	}
}

export default App
