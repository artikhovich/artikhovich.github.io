var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:[
	'./src/app.js'
	],
	output:{
		path: path.join(__dirname),
		filename:'build.js',
	},
	module:{
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use:["babel-loader"]
		},
		{
			test: /\.css$/,
			use:['style-loader','css-loader']
		},
		// {
		// test: /\.(gif|png|jpe?g|svg)$/i,
		// use: [
		// 'file-loader',
		// 	{
		// 		loader: 'image-webpack-loader',
		// 		options: {
		// 			bypassOnDebug: true, // webpack@1.x
		// 			disable: true, // webpack@2.x and newer
		// 			},
		// 	},
		// 	]
		// },
		{
			test: /\.html$/,
			use: ["html-loader"],
		},
		]
	},
	plugins:[
	new HtmlWebPackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	})]
}