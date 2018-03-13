'use strict'
import React from 'react';
import ReactDOM from 'react-dom'
import Title from './App'

ReactDOM.render(
	<Title />,

	document.querySelector('[data-js="app"]')

);
	// React.createElement(Title), caso o jsx não for reconhecido pq o babel-preset-react não está instalado
  // <Title />,
// var sum = require('./App')

// console.log(sum(1, 2))

// if (module.hot) {
// 	module.hot.accept('./print.js', function() {
// 		console.log('Accepting the updated printMe module!');
// 		printMe();
// 	})
// }

if (module.hot) {
  module.hot.accept();
}
