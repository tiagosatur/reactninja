'use strict'
import React, { Component } from 'react'
import Title from './Title'
import './style/main.sass'

class App extends Component {
	render() {
		return (
			// className = class
			// htmlFor = for
			// atributos data e atri aria são escritos normalmente
			// outros atributos, se forem nomes compostos, serão
			// escritos usando cammel case
			<div className='container'>
				<Title name='Tiago Satur' />
				<label htmlFor='text'>Input label</label>
				<input type='text' id='text' />
			</div>
		)
	}
}

export default App
