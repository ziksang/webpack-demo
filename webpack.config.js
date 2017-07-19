var path = require('path')
var webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry: './main.js',
	output: {
		filename: "index.js",
		libraryTarget: "umd",
		//path: path.resolve(__dirname, 'libs/actionsheet')
		//path: path.resolve(__dirname, 'libs/z-switch')
		//path: path.resolve(__dirname, 'libs/search')
		//path: path.resolve(__dirname, 'libs/alert')
		//path: path.resolve(__dirname, 'libs/alertPlugin')
		//path: path.resolve(__dirname, 'libs/confirm')
		//path: path.resolve(__dirname, 'libs/ConfirmPlugin')
		//path: path.resolve(__dirname, 'libs/index-list')
		//path: path.resolve(__dirname, 'libs/index-section')
		//path: path.resolve(__dirname, 'libs/sms-countDown')
		//path: path.resolve(__dirname, 'libs/z-dialog')
		//path: path.resolve(__dirname, 'libs/z-button')
		//path: path.resolve(__dirname, 'libs/accordion')
		path: path.resolve(__dirname, 'libs/accordion-item')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}

		})
	]
}