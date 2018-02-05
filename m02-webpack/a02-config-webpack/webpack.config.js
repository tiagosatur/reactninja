'use strict'

const path = require('path')

// vamos exportar o objeto que o webpackprecisa para fazer a letura do nosso
// arquivo e gerar o bundle (grupo de módulos)
module.exports = {
	// __dirname - variável global do node
  // path.join - junta os tres valores para funcionar em qualquer sistema operacional
	entry: path.join(__dirname, 'src', 'index'),

  // local onde será gerado o arquivo de saída
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}
