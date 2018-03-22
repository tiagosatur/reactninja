'use strict'
import React, { Component } from 'react'
import Square from './square'
import './style/main.sass'

class App extends Component {

	render() {
		//o onClick apesar de ser escrito inline no jsx
		// o react o trata e o transforma em um event listener pra aquele elemento
		return (
			<div className="container" onClick={function(e) {
				alert('Você clicou na cor')
			}}>
				{['blue', 'OrangeRed', 'blue', 'black', 'orange', 'fuchsia'].map(
					(square, index) => <Square key={index} color={square} />
				)}
			</div>

		)
	}
}

export default App
