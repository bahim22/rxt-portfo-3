const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BannerPlugin = require('webpack').BannerPlugin;

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
					MiniCssExtractPlugin.loader,
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
				generator: {
					filename: 'icons/[hash][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(?:ico|png|jpg|jpeg)$/i,
				type: 'asset/resource',
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
			favicon: './public/favicon.ico',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				keepClosingSlash: true,
				// minifyJS: true,
				// minifyCSS: true,
				// minifyURLs: true,
			},
			hash: true,
			inject: true,
		}),
		new webpack.BannerPlugin({
			banner: 'Hima Balde Production Setup 2022',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash]css',
			chunkFilename: '[id].css',
			ignoreOrder: true,
		}),
		new CleanWebpackPlugin({}),
		new BundleAnalyzerPlugin({ analyzerMode: 'json' }),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new MiniCssExtractPlugin({}),
			'...',
			new CssMinimizerPlugin({
				// minify: CssMinimizerPlugin.cleanCssMinify,
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
		runtimeChunk: true,
		moduleIds: 'deterministic',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					type: 'css/mini-extract',
					chunks: 'all',
				},
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
					priority: -10,
				},
			},
		},
	},
	performance: {
		hints: 'warning',
		maxEntrypointSize: 775000,
		maxAssetSize: 775000,
	},
	resolve: {
		extensions: ['.js','.jsx']
	},
}
