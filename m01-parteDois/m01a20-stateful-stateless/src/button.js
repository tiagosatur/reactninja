'use strict'
import React, { Component } from 'react'

// Dessa forma, qualquer elemento que for passado como this.props
// como um svg, um texto, outro componente é renderizado dentro
// do componente Button, ou seja, todos os filho que são passados via props
const Button = ({ children, changeColor, color }) => (
	<button onClick={() => changeColor(color)}>{children}</button>
)

export default Button
