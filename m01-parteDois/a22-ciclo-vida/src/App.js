'use strict'
import React, { Component } from 'react'
import Timer from './timer'
import './style/main.sass'

class App extends Component {
	constructor() {
		console.log('constructor')
		super()
		this.state = {}
		this.changeColor = this.changeColor.bind(this)
	}

	componentWillMount() {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
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
				<Timer />
			</div>
		)
	}
}

export default App
