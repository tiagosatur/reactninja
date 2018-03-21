'use strict'
import React, { Component } from 'react'


// forma 1
// const Title = () => (
// 	<h1>Olá Rapaz</h1>
// )

// forma 2
// const Title = (props) => (
// 		<h1>Olá {`${props.name} ${props.lastname}`}</h1>
// )


// forma 3
const Title = ({name, lastname}) => (
	<h1>Olá {`${name} ${lastname}`}!</h1>
)


Title.defaultProps = {
	name: 'Desconhecido',
	lastname: 'Sem sobrenome'
}
// class Title extends Component {
//
// 	getDefaultProps() {
// 		return {
// 			name: 'Desconhecido ',
// 			// lastname: 'Sem sobrenome'
//
// 			lastname: {
// 				first:'Sem',
// 				last:'sobrenome'
// 			}
//
// 		}
// 	}
//
// 	render() {
// 		return (
//
// 			<h1>Olá {this.props.name} {this.props.lastname}</h1>
//
// 		)
// 	}
// }

export default Title
