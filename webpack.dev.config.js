const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')

module.exports = {
	// the output bundle mode: prod or dev; changed via scripts in pack.json
	mode: 'development',
	// the app entry point is /src/index.js
	entry: [
		// "core-js/modules/es.promise",
		// "core-js/modules/es.array.iterator",
		path.resolve(__dirname, 'src', 'index.js'),
	],
	output: {
		// the output of the webpack build will be in /dist directory
		path: path.resolve(__dirname, 'dist'),
		// the filename of the JS bundle will be bundle.js
		filename: '[name].bundle.js', //path.join(_dirname, 'dist')
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].js',
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
			// contentBase: path.resolve(__dirname, 'dist')
		},
		port: 5500,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type Authorization',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Max-Age': '3600',
		},
		hot: true,
		// open: true,
		// historyApiFallback: true,
		// compress: true,
		// overlay: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
			{
				test: /\.(?:ico|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.svg$/,
				use: 'file-loader',
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html',
			cache: true,
		}),
		new HtmlWebpackPlugin({
			// Also generate a test.html
			filename: '[name].html',
			title: 'Hima Webpack Dev Run Test',
			template: './public/index.html',
		}),
		new webpack.BannerPlugin({
			banner: 'Hima Balde (@bahim22) 2022',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
