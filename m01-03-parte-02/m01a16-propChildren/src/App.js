'use strict'
import React, { Component } from 'react'
import Button from './button'
import './style/main.sass'

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Button>
					<span>Span 01</span>
					<b> Bold text</b>
				</Button>
			</div>
		)
	}
}

export default App
