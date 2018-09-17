'use strict'
import React, { Component } from 'react'
import Title from './Title'
import './style/main.sass'

class App extends Component {
	render() {
		return (

			<div className='container'>
				<Title name='Tiago' lastname='Satur'/>
				<Title name='Esse é um número' lastname={0}/>
				<Title name='Esse é uma string de números' lastname={[1, 2, 3]}/>
				{/*<Title name='Isso é um objeto' lastname={{first: 'Sa', last:'tur'}} /> */}

			</div>
		)
	}
}

export default App
