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
		this.changeColor = this.changeColor.bind(this)
	}

	changeColor(buttonColor) {
		this.setState({ color: buttonColor })
	}

	// Como o nome da propriedade é o mesmo nome da variavel color, posso usar só color ES6
	//Tarefa
	// Botões que trocam svg e mude as cores do svg
	// Autobind - https://babeljs.io/docs/plugins/transform-class-properties/
	render() {
		return (
			<div className="container">
				<Square color={this.state.color} />

				{['red', 'green', 'blue'].map((color, index) => (
					<Button key={index} changeColor={this.changeColor} color={color}>
						{color}
					</Button>
				))}
			</div>
		)
	}
}

export default App
