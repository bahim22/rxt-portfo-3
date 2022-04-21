const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV === 'development';

module.exports = {
	mode: 'development', // mode: {dev}
	// target: 'web',
	// externals: {
	// 	react: true,
	// },
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	entry: path.resolve(__dirname, 'src', 'index.js'),
	// entry: {
	// 	main: './src/index.js',
	// },
	output: {
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/', //* '/' | 'dist/
		// filename: '[name].[chunkhash].js',
		filename: 'bundle.js',
	},
	// devtool: 'source-map',
	devtool: false,
	// cache: true,
	stats: true,
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
			// serveIndex: true, //** from dist or public? */
		},
		// port: 7222,
		// client: {
		// 	logging: 'warn',
		// 	// reconnect: 10,
		// 	progress: true,
		// 	// webSocketURL: 'auto://0.0.0.0:0/ws', // || 'ws://localhost:7222',
		// },
		// webSocketServer: 'ws://localhost:7222',//* ? relation to express; useful?
		// allowedHosts: 'auto',
		// watchFiles: ['public/**/*', 'src/**/*'],
		// devMiddleware: {}, //* ? Learn more before using,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
			'Access-Control-Expose-Headers': '*',
			'Access-Control-Max-Age': '3600',
		},
		// headers: {
		// 	'Access-Control-Allow-Origin': 'crossorigin',
		// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		// 	'Access-Control-Allow-Credentials': true,
		// },
		hot: true,
		open: true,
		historyApiFallback: true,
		// compress: true,
		// server: {
		// 	type: 'https',
		// 	// options: {},
		// },
		/* setupMiddlewares: (middlewares, options) => {
			//* ? Learn more before using; Express w/ nodemailer?
		}, */
		// host: '0.0.0.0',
		// magicHtml: true,
	},
	module: {
		rules: [
			{
				test: /\.(m?js|js|jsx)$/i,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						exclude: [/node_modules[\\/]core-js/, /node_modules[\\/]webpack[\\/]buildin/],
						presets: ['@babel/preset-env', '@babel/preset-react'],
						// plugins: [
						// 	'@babel/plugin-proposal-class-properties',
						// 	'@babel/plugin-syntax-dynamic-import',
						// 	'@babel/plugin-transform-runtime',
						// ],
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
			// files: ['src/**/*.js', 'src/**/*.jsx'],
			files: path.resolve(__dirname, 'src'),
			exclude: 'node_modules',
			// eslintPath: './.eslintrc.json',
			// eslintPath: path.resolve(__dirname, 'eslintrc.json'),
			cache: true,
			cacheLocation: './.eslintcache',
			outputReport: true,
		}),
		new HtmlWebpackPlugin({
			fileName: 'index.html',
			title: '419 Dev Ded',
			// template: './public/index.html',
			template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: 'public/logod2.ico',
			cache: true,
			// hash: true,
			inject: true,
			esModule: true,
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
