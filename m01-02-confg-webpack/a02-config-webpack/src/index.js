'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const renderApp = (NextApp) => {
	ReactDOM.render(
		<AppContainer>
			<NextApp />
		</AppContainer>,
		document.querySelector('[data-js=app]')
	)
}

renderApp(App)

// Esse código foi refatorado, pois estava repetindo o código de renderização. Então foi criada uma função em que é passado qual app vc quer renderizar
// ReactDOM.render(
// 	<App />,
//
// 	document.querySelector('[data-js="app"]')
// )


// React.createElement(Title), caso o jsx não for reconhecido pq o babel-preset-react não está instalado
// <Title />,
// var sum = require('./App')

// console.log(sum(1, 2))



if (module.hot) {
	 // module.hot.accept()
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default //Quando for importar utilizando um módulo do common JS para um módulo do ECMA script 6 é preciso adicionar o .default no final. Pois senão ele vai importar o default, ao invés de importar o app que precisamos.

		// Estava assim:
		// render(
		// 	<AppContainer>
		// 		<NextApp />
		// 	</AppContainer>,
		// 	document.querySelector('[data-js=app]')
		// )

		// Ficou assim:
		renderApp(NextApp)
	})
}
