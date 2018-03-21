'use strict'
import React, { Component } from 'react'
import Title from './Title'
import './style/main.sass'

class App extends Component {
	render() {
		return (

			<div className='container'>
				<Title name='Tiago' lastname='Satur'/>
			</div>
		)
	}
}

export default App
