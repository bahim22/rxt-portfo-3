const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const BannerPlugin = require('webpack').BannerPlugin;

module.exports = {
	mode: 'development',
	entry: [
		// "core-js/modules/es.promise",
		// "core-js/modules/es.array.iterator",
		path.resolve(__dirname, 'src', 'index.js'),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
			// contentBase: path.resolve(__dirname, 'dist')
		},
		port: 5500,
		headers: {
			'Access-Control-Allow-Origin': 'origin',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type Authorization',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Max-Age': '3600',
		},
		hot: true,
		open: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/, // /[\\/].(css)$/
				use: [
					{ loader: 'style-loader' },
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
				test: /[\\/].(woff(2)?|eot|ttf|otf|svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.svg$/,
				use: 'file-loader',
			},
			{ test: /\.txt$/, use: 'raw-loader' },
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
			inject: true,
			esModule: true,
		}),
		new HtmlWebpackPlugin({
			filename: '[name].html',
			title: 'Hima Webpack Dev Run Test',
			template: './public/index.html',
			cache: true,
			inject: 'body',
			esModule: true,
			chunks: 'all' || [
				'vendor',
				'app',
				'manifest',
				'polyfills',
				'styles',
				'scripts',
				'vendor-styles',
				'vendor-scripts',
			],
			hash: true,
		}),
		new webpack.BannerPlugin({
			banner: 'Hima Balde Dev Webpack Setup  2022',
			raw: false,
			entryOnly: false,
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}),
	],
	performance: {
		hints: 'error',
		maxEntrypointSize: 775000,
		maxAssetSize: 775000,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
	},
}
