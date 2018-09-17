'use strict'
import React, { Component } from 'react'
import Square from './square'
import './style/main.sass'

class App extends Component {
	render() {
		//primeira forma
		// return <Square color="red" />
		return (
			<div className="container">
				{['blue', 'OrangeRed', 'green', 'black', 'orange', 'fuchsia'].map(
					square => <Square key={square} color={square} />
				)}

				{['blue', 'OrangeRed', 'blue', 'black', 'orange', 'fuchsia'].map(
					(square, index) => <Square key={index} color={square} />
				)}
			</div>

			// A prop key é utilizada pelo react para saber qual elemento está sendo
			// renderizado e se ele está sendo modificado e/ou removido. Principalmente,
			// numa iteração (loop) de elementos. Gera melhora de performance.
			// Quando houver um map, usar a key.

			// Se houver keys igual, o react entende que é um element duplicado
			// que não precisa ser renderizado.
		)
	}
}

export default App
