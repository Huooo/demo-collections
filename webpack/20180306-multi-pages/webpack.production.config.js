const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {

	entry: __dirname + '/app/main.js',

	output: {
		path: __dirname + '/build',
		filename: 'bundle-[hash].js'
	},

	devtool: 'null',

	module: {
		rules: [
			{
				test: /(\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /(\.css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			}
		]
	},

	plugins: [
		new webpack.BannerPlugin('--- Created by Cici Hu at 2017.12.06 20:30:00. ---'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
        new CleanWebpackPlugin( 'build/*.*', {
        	root: __dirname,
        	verbose: true,
        	dry: false
        })
	]
};