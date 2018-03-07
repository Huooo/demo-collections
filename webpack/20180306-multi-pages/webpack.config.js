const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');



let entries = {},
	plugins = [
		new webpack.BannerPlugin('--- Created by Cici Hu at 2018.03.06 11:30:00. ---')
	];

// 完善 entry 和 plugins
glob.sync( './app/*/*.js' ).forEach( ( entry ) => {

	let entry_dirname = path.dirname(entry),
		entry_basename = path.basename(entry, '.js');
		entry_name = entry_dirname.slice( entry_dirname.lastIndexOf('/') + 1 );

    entries[entry_name] = [entry];

    let html_webpack_plugin_conf = {
    	filename: entry_name +'.html',
    	template: entry_dirname + '/' + entry_basename + '.tmpl.html'
    };
    
    plugins.push( new HtmlWebpackPlugin(html_webpack_plugin_conf) );
});



module.exports = {
	
	entry: entries,
	
	output: {	
		path: __dirname + '/dev',
		filename: 'js/bundle-[name].js'
	},

	devServer: {		
		contentBase: './dev',
		port: 8888,
		inline: true,
		historyApiFallback: false,
		proxy: {
			"/api": {
			    target: "http://rap2api.taobao.org/app/mock/5245/",
			    changeOrigin: true,
			    pathRewrite: {
		        	'^/api': ''
		        }
			}
		}
	},

	devtool: 'eval-source-map',

	module: {
		rules: [
			{
				test: /(\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/				// 屏蔽不需要处理的文件
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
				],
				exclude: /node_modules/
			}
		]
	},

	plugins: plugins
};