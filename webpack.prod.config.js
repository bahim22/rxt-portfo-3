// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/', // || '/',
		chunkFilename: 'js/[name].[contenthash].js',
		filename: '[name].bundle.js',
	},
	devtool: 'source-map',
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
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{ loader: 'postcss-loader' },
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
				test: /[\\/].svg$/,
				use: 'file-loader',
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png',
							// limit: 8192,
							name: 'images/[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			fileName: './index.html',
			// minify: 'auto',
			cache: true,
			hash: true,
			favicon: './public/favicon.ico',
			// removeComments: true,
			// collapseWhitespace: true,
			/* {
			removeRedundantAttributes: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		}, */
		}),
		new MiniCssExtractPlugin({
			// filename: '[name].css',
			filename: 'styles/[name].[contenthash]css',
			chunkFilename: '[id].css',
			ignoreOrder: true,
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({ analyzerMode: 'json'}),
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
					include: /[\\/].min[\\/].js$/,
					exclude: /[\\/]node_modules/,
				},
			}),
		],
		runtimeChunk: 'single',
		moduleIds: 'deterministic',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				styles: {
					name: false,
					type: 'css/mini-extract',
					chunks: 'all',
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
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
	}
}
