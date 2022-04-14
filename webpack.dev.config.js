const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// const dev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: 'development', // mode: {dev}
	// entry: path.resolve(__dirname, 'src', 'index.js'),
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// path: path.resolve(__dirname, 'public'),
		publicPath: 'auto', //* '/' | 'dist/
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js',
		// filename: 'bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
			publicPath: '/',
			serveIndex: true,
			// directory: path.resolve(__dirname, 'dist'), //** from dist or public? */
			// contentBase: path.resolve(__dirname, 'dist'),
		},
		port: 7222,
		client: {
			logging: 'info',
			reconnect: 10,
			progress: true,
			// webSocketURL: 'auto://0.0.0.0:0/ws', // || 'ws://localhost:7222',
		},
		// webSocketServer: 'ws://localhost:7222',//* ? relation to express; useful?
		allowedHosts: 'auto',
		watchFiles: ['public/**/*', 'src/**/*'],
		// devMiddleware: {}, //* ? Learn more before using
		/* headers: {
			'Access-Control-Allow-Origin': 'origin',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type Authorization',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Max-Age': '3600',
		}, */
		hot: true,
		open: false,
		compress: true,
		server: {
			type: 'https',
			// options: {},
		},
		/* setupMiddlewares: (middlewares, options) => {
			//* ? Learn more before using; Express w/ nodemailer?
		}, */
		host: '0.0.0.0',
		historyApiFallback: true,
		magicHtml: true,
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
				test: /\.css$/i, // /[\\/].(css)$/
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
			},
			{
				test: /\.(?:ico|png|jpg|jpeg|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/inline',
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
		new ESLintPlugin({
			lintDirtyModulesOnly: false,
			fix: false,
			cache: true,
			cacheLocation: './.eslintcache',
			outputReport: true,
		}),
		new HtmlWebpackPlugin({
			fileName: 'test.html',
			template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: 'public/favicon.ico',
			cache: true,
			inject: true,
			esModule: true,
			minify: {
				minifyJS: true,
				minifyCSS: true,
			},
		}),
		new HtmlWebpackPlugin({
			fileName: 'double.html',
			template: './public/index.html',
			// template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: './public/favicon2.ico',
			cache: true,
			hash: true,
			inject: 'head',
			minify: {
				// removeComments: true,
				collapseWhitespace: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
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
			openAnalyzer: false,
			reportFilename: 'bundle-report.html',
			generateStatsFile: true,
			statsFilename: 'bundle-stats.json',
		}),
	],
	optimization: {
		nodeEnv: 'development',
		minimize: true,
	},
	performance: {
		// hints: 'warning',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
	},
};
