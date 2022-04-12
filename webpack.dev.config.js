const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js',
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
			// 'Access-Control-Max-Age': '3600',
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
				test: /\.(?:ico|png|jpg|jpeg|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /[\\/].(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/inline',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: '[hash][ext]',
				},
			},
			/* {
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
			}, */
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
			// template: './public/index.html',
			filename: '[name].html',
			// inject: true,
			// esModule: true,
		}),
		new HtmlWebpackPlugin({
			fileName: './index.html',
			title: 'Hima Webpack Dev Run Test',
			template: './public/index.html',
			favicon: './public/favicon.ico',
			cache: true,
			inject: true,
			// esModule: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				// minifyURLs: true,
			},
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: './src/assets/** */',
		// 			to: './dist/',
		// 			globOptions: {
		// 				ignore: ['*.js', '*.css'],
		// 			},
		// 		},
		// 	],
		// }),
		new webpack.BannerPlugin({
			banner: 'Hima Balde Dev Webpack Setup 2022',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: true,
			reportFilename: './bundle-report.html',
			generateStatsFile: true,
			statsFilename: './bundle-stats.json',
		}),
	],
	optimization: {
		minimize: true,
		/* minimizer: [
			new TerserPlugin({
			}),
		], */
	},
	performance: {
		// hints: 'warning',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
	},
};
