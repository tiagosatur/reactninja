'use strict'
import React, { Component } from 'react'
import './style/main.sass'

class App extends Component {
	constructor() {
		super()
		this.state = {
			value: 'Valor inicial',
			checked: false,
			radioValue: 'Valor do radio',
			selectValue: 2,
		}
	}
	render() {
		return (
			<div>
				<h1>Intro to Forms</h1>
				<h2>Input text</h2>
				<form action="">
					{/* Não é possível editar o value inicial de um input porque qualquer
						componente react será renderizado e manterá aquele estado na forma
						como foi gerado inicialmente. Para modificar esse valor vc deve
						utilizar o método onchange, e num componente statefull, usar o estado
						da aplicação pra modificar o valor do input.
					*/}
					<input type="text" value='Valor inicial'/>


					{/*
						O evento e do react é um evento sintético. Ele tem propriedades
						diferentes do evento padrão do javascript. Dentre os eventos sintéticos
						há uma propriedade chamada nativeEvent, o qual é o evento nativo
						do próprio elmento Html. Essa forma de modificar inputs é chamada
						CONTROLED COMPONENTS. São geralmente componentes stateless, que não
						mantêm um estado próprio quando utilizada a propriedade value.
						Se criarmos o input sem a prop value, ele fica editável. Isso acontece
						pq ele se torna um componente statefull, mantendo um estado interno próprio,
						para poder gerenciar as inserções de caracteres, mas não modifica o value.
						Nesse caso, seria um UNCONTROLED COMPONENT.
					*/}
					<input type="text" value={this.state.value} onChange={(e) => {
							console.log('Evento do react --- ', e);

							this.setState({
								value: e.target.value,
							})
						}}
					/>


					{/*
						Caso vc queira utilizar um uncontroled component e mesmo assim passar
						um valor inicial pra ele é possível usar o defaultValue. Ele será statefull.
					*/}
					<input type="text" defaultValue='Valor inicial'/>

				</form>


				<h2>Checkbox</h2>
				<form action="">
					<h3>Controlled checkbox</h3>
					<label>
						Check me
						<input
							type="checkbox"
							value='my-chackbox'
							checked={this.state.checked}
							onChange={(e) => {
								this.setState({
									//As duas formas funcionam
									checked: !this.state.checked
									//checked: e.target.checked //Se negar, vc estará voltando ao estado anterior
								})
							}}
						/>
					</label>

					<h3>Uncontrolled checkbox</h3>
					<label>
						Check me
						<input
							type="checkbox"
							value='my-checkbox'
							defaultChecked={false} // quando for true, naõ é preciso passar valor algum, somente o defaultChecked
						/>
					</label>
				</form>

				<h2>Input Radio</h2>
				<form action="">
					<h3>Controlled radio</h3>
					<label>
						Choose me
						<input
							type="radio"
							name='myradio'
							value={this.state.radioValue}
							onChange={(e) => {
								this.setState({
									radioValue: e.target.value
								})
							}}
						/>
					</label>

					<h3>Uncontrolled Radio</h3>
					<label>
						Choose me
						<input
							type="radio"
							name='myradio'
							value='my-radio-value'
							defaultChecked
						/>
					</label>
				</form>

				<h2>Select</h2>
				<form>
					{/*
						No react é possível passar o selected value direto no select.
						Também é possível usar o parametro multiple para que seja
						selecionada mais de uma opção.
					*/}
					<select value={this.state.value} onChange={(e) => {
						this.setState({
							selectValue: e.target.value
						})
					}}>
						<option value="1">Opção 1</option>
						<option value="2">Opção 2</option>
						<option value="3">Opção 3</option>
					</select>
				</form>

				<h2>Textarea</h2>
				<form>
					{/*
						Se precisar usar um valor padrão dentro do textarea, usar defaultValue
						ou value. O value precisa ter o onChange para que o valor possa ser modificado.
					*/}
					<textarea defaultValue={'Valor padrão \ncom uma quebra de linha'} />
				</form>
			</div>
		)
	}
}

export default App
