const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV == 'development';

module.exports = {
	mode: 'development', // mode: {dev}
	target: 'web',
	externals: {
		react: true,
		// 'react-native': true,
		// 'react-dom': true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
		// modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
	},
	// entry: './src/index.js', //path.resolve(__dirname, 'src', 'index.js'),
	entry: {
		main: './index.js',
	},
	output: {
		// path: path.resolve(__dirname, 'dist'),
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'auto', //* '/' | 'dist/
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js',
		// filename: 'bundle.js',
	},
	devtool: 'source-map',
	cache: true,
	stats: 'detailed',
	// stats: {
	// 	preset: 'detailed',
	// 	cachedModules: true,
	// 	cachedAssets: true,
	// 	env: true,
	// 	errorDetails: true,
	// 	entrypoints: true,
	// 	outputPath: true,
	// 	runtimeModules: true,
	// 	version: true,
	// 	usedExports: false,
	// 	logging: true,
	// 	loggingTrace: true,
	// 	modules: false,
	// 	// modulesSort: 'size',
	// 	errors: true,
	// 	errorStack: true,
	// 	publicPath: true,
	// },
	devServer: {
		host: 'localhost',
		static: {
			directory: path.resolve(__dirname, 'dist'),
			publicPath: '/',
			serveIndex: true, //** from dist or public? */
		},
		port: 7222,
		client: {
			logging: 'warn',
			// reconnect: 10,
			progress: true,
			// webSocketURL: 'auto://0.0.0.0:0/ws', // || 'ws://localhost:7222',
		},
		// webSocketServer: 'ws://localhost:7222',//* ? relation to express; useful?
		allowedHosts: 'auto',
		// watchFiles: ['public/**/*', 'src/**/*'],
		// devMiddleware: {}, //* ? Learn more before using
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
		// server: {
		// 	type: 'https',
		// 	// options: {},
		// },
		/* setupMiddlewares: (middlewares, options) => {
			//* ? Learn more before using; Express w/ nodemailer?
		}, */
		// host: '0.0.0.0',
		// historyApiFallback: true,
		magicHtml: true,
	},
	module: {
		rules: [
			{
				test: /\.(m?js|js|jsx)$/i,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						exclude: [/node_modules[\\/]core-js/, /node_modules[\\/]webpack[\\/]buildin/],
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-syntax-dynamic-import',
							'@babel/plugin-transform-runtime',
							'@babel/plugin-transform-react-jsx',
						],
						cacheDirectory: true,
						cacheCompression: true,
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
			// {
			// 	test: /\.svg$/,
			// 	type: 'asset/resource',
			// },
			{
				test: /\.(?:ico|png|jpg|jpeg|webp|svg)$/i,
				type: 'asset',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new ESLintPlugin({
			lintDirtyModulesOnly: true,
			fix: false,
			extensions: ['.js', '.jsx'],
			files: ['src/**/*.js', 'src/**/*.jsx'],
			exclude: 'node_modules',
			// eslintPath: './.eslintrc.json',
			// eslintPath: path.resolve(__dirname, 'eslintrc.json'),
			cache: true,
			cacheLocation: './.eslintcache',
			outputReport: true,
		}),
		new HtmlWebpackPlugin({
			fileName: 'index.html',
			title: 'Dev Ded',
			template: '/public/index.html',
			// template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: '/public/logod2.ico',
			cache: true,
			hash: true,
			inject: true,
			// esModule: true,
			// minify: {
			// 	collapseWhitespace: true,
			// 	minifyJS: true,
			// 	minifyCSS: true,
			// },
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: 'src/assets',
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
			// analyzerMode: 'static',
			// openAnalyzer: false,
			// reportFilename: 'bundle-report.html',
			generateStatsFile: true,
			statsFilename: 'bundle-stats.json',
		}),
	],
	// optimization: {
	// 	nodeEnv: 'development',
	// 	// minimize: true,
	// },
	performance: {
		hints: 'warning',
	},
};
