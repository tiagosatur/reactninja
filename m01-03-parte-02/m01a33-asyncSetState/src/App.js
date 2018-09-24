'use strict'
import React, { Component } from 'react'
import './style/main.sass'

class App extends Component {
	constructor() {
		super()
		this.state = {
			checked: false,
			showContent: false,
		}
	}

	render() {
		return (
			<div>
				<label>
					{/*
						O setState pode receber um segundo parametro (uma função de callback).
						E essa função é executada quando o estado é alterado.
						Há momentos em que será preciso atualizar o estado do componente baseado
						numa atualização anterior. Então, como o setState é assíncrono, é preciso
						utilizar a função de callback no setState.
					*/}
					<input
						type="checkbox"
						checked={this.state.checked}
						onChange={() => {
							this.setState({checked: !this.state.checked
							}, () => {
								this.setState({
									showContent: this.state.checked
								})
							})
							// this.setState({showContent: this.state.checked}) //Somente assim, o checked não corresponde ao true or false do conteúdo
						}}
					/>
					Mostrar conteúdo
				</label>

				{this.state.showContent && <div>Olha eu aqui!</div>}

			</div>
		)
	}
}

export default App
