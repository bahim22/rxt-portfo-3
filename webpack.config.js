
// current WP config for rxt-portfo-3
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js', //path.join(_dirname, 'dist')
	},
	devServer: {
		port: 3222,
		// watchContentBase: ,
		/* allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? 
	*/
	},
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/, //test: /\.jsx?$/
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				}
			},
		},
		{
			test: /\.css$/,
			use: [
			  'style-loader',
			  {
				loader: 'css-loader',
				options: {
				  importLoaders: 1
				}
			  },
			  'postcss-loader'
			]
		  },
/* 		{
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader,
			'style-loader',
			{
			loader: 'css-loader',
			options: {
				importLoaders: 1
			}
			},
			'postcss-loader',
		]
		}, */
		{
		test: /\.svg$/,
		use: 'file-loader'
		},
		{
		test: /\.png$/,
		use: [
			{
			loader: 'url-loader',
			options: {
				mimetype: 'image/png',
			}
			}
		]
		},
		// *? check if this is needed and loader to use
		/* 	  { 
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [{
				loader: 'file-loader',
			}]
		}, */
			],
		},
	plugins: [
		new HtmlWebpackPlugin({
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html'
		}),
		// new MiniCssExtractPlugin({
		// }),
		new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: ['**/*', '!index.html'],
		verbose: false,
		dry: false,
		//   watch:
		cleanStaleWebpackAssets: true,
		protectWebpackAssets: false,
		cleanAfterEveryBuildPatterns: ['!index.html'],
		//   dangerouslyAllowCleanPatternsOutsideProject: false,

		}),
		new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		openAnalyzer: true,
		analyzerPort: 8555,
		generateStatsFile: true,
		statsFilename: 'stats.json',
		//   statsOptions: null,
		logLevel: 'info',
		defaultSizes: 'parsed',
		reportFilename: 'report.html',
		})
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
