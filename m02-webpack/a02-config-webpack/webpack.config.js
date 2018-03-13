'use strict'

const path = require('path')
const webpack = require('webpack')

// vamos exportar o objeto que o webpackprecisa para fazer a letura do nosso
// arquivo e gerar o bundle (grupo de módulos)
module.exports = {
	devtool: 'source-map', //quando o webpack compilar os arquivos, ele vai gerar um source-map (mapa do arquivo principal). Já no console será exibido onde está o erro direto no index.js ao invés de no bundle.js
	// __dirname - variável global do node
  // path.join - junta os tres valores para funcionar em qualquer sistema operacional
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index')
	],

	// local onde será gerado o arquivo de saída
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()

	],

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'babel'
		}]
	}
}
