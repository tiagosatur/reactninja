'use strict'
import React, { Component } from 'react'


class Title extends Component {

	getDefaultProps() {
		return {
			name: 'Desconhecido ',
			// lastname: 'Sem sobrenome'

			lastname: {
				first:'Sem',
				last:'sobrenome'
			}

		}
	}

	render() {
		return (

			// <h1>Olá {this.props.name} {this.props.lastname}</h1>

			// <h1>Olá
			// 	{this.props.name
			// 	this.props.lastname.first
			// 	this.props.lastname.last}
			// !</h1>

			<h1>Olá {this.props.name} {this.props.lastname}</h1>

		)
	}
}

export default Title
