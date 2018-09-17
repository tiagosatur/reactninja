'use strict'
import React, { Component } from 'react'


class Title extends Component {
	render() {
		return (
			// As props funcionam como os atributos das tags HTML,
			// quando você precisa passar uma classe, id ou atributo
			// qualquer para um componente, isso é feito via props.
			// O objeto this.props terá todas as propriedades que forem
			// passadas para esse componente
			<h1>Olá {this.props.name}</h1>
		)
	}
}

export default Title
