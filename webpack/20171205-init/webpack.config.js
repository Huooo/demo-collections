const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	entry: __dirname + '/app/main.js',				// [app] - 唯一的入口文件
	
	output: {	
		path: __dirname + '/dev',					// [dev] - 打包之后的文件存放位置
		filename: 'bundle.js'						// [dev] - 打包之后的文件名
	},

	devServer: {		
		contentBase: './dev',						// 设置为dev文件下提供本地服务器
		port: 8888,									// 监听端口号
		inline: true,								// 实时刷新
		historyApiFallback: false,					// 不重定向跳转
		proxy: {
			"/api": {
			    target: "http://rap2api.taobao.org/app/mock/5245/",
			    changeOrigin: true,
			    pathRewrite: {
		        	'^/api': ''						// 将数据请求路径中的'/api'重写为''
		        }
			}
		}
	},

	devtool: 'eval-source-map',						// 调试工具

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

	plugins: [
		new webpack.BannerPlugin('--- Created by Cici Hu at 2017.12.06 20:30:00. ---'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'	
		})
	]

	// __dirname是nodejs中的一个全局变量，指向当前执行脚本所在的目录
};