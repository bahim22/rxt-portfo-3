// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
		// publicPath: '/',
		chunkFilename: 'js/[name].[contenthash].js',
		filename: '[name].bundle.js',
	},
	devtool: false,

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //test: /\.jsx?$/
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
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
							limit: 8192,
							name: 'images/[name].[ext]',
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
			// inject: 'body',
			minify: 'auto',
			cache: true,
			hash: true,
			favicon: './public/favicon.ico',
			/* {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		}, */
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			filename: 'styles/[name].[contenthash]css',
			chunkFilename: '[id].css',
			ignoreOrder: false,
		}),
		new CleanWebpackPlugin()
		/* new webpack.EnvironmentPlugin({
  			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
  			DEBUG: false,
		}) */
		// new
		/* new BundleAnalyzerPlugin({
		analyzerMode: 'static',
		openAnalyzer: true
	}), */
	],
	optimization: {
		minimize: true,
		minimizer: [
			new MiniCssExtractPlugin(),
			'...',
			new CssMinimizerPlugin({
				minify: CssMinimizerPlugin.cleanCssMinify,
			}),
			new TerserPlugin({
				parallel: true,
				minify: TerserPlugin.swcMinify,
				terserOptions: {
					// ecma: 6,
					include: /\.min\.js$/,
					exclude: /node_modules/,
				},
			}),
		],
		runtimeChunk: 'single',
		moduleIds: 'deterministic',
		splitChunks: {
			// chunks: 'all',
			cacheGroups: {
				styles: {
					name: 'styles',
					type: 'css/mini-extract',
					chunks: 'all',
					enforce: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
				},
			},
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
		/* alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'public/assets'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			// '@pages': path.resolve(__dirname, 'src/pages'),
			// '@utils': path.resolve(__dirname, 'src/utils'),
		} */
	},
}
