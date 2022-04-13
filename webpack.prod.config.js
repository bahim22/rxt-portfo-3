const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV === 'production';

module.exports = {
	mode: 'production',
	// entry: path.resolve(__dirname, 'src', 'index.js'),
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js',
		/* filename: 'bundle.js', */
		clean: true,
	},
	devtool: 'source-map',
	// cache: true,
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
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				/* generator: {
					filename: 'icons/[hash][ext]',
				}, */
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(?:ico|png|jpg|jpeg|webp)$/i,
				type: 'asset/resource',
			},
			// {
			// 	test: /[\\/].svg$/,
			// 	use: 'file-loader',
			// },
			// {
			// 	test: /\.png$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				mimetype: 'image/png',
			// 				name: 'images/[name].[ext]',
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			favicon: './public/favicon.ico',
			cache: true,
			hash: true,
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
			},
		}),
		new webpack.BannerPlugin({
			banner: 'Hima Balde Production Setup 2022',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash]css',
			chunkFilename: '[id].[contenthash].css',
			ignoreOrder: true,
		}),
		// new CleanWebpackPlugin(),
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: 'json',
		// 	chunkFilename: 'bundle-report/[name].json',
		// 	openAnalyzer: false,
		// 	generateStatsFile: true,
		// 	statsFilename: 'stats-report/[name].json',
		// }),
	],
	optimization: {
		nodeEnv: 'production',
		minimize: true,
		minimizer: [
			new MiniCssExtractPlugin(),
			new CssMinimizerPlugin({
					parallel: true,
					minify: CssMinimizerPlugin.cleanCssMinify
				}),
			'...',
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
		chunkIds: 'deterministic',
		mergeDuplicateChunks: true,
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '~',
			maxInitialRequests: 20, // for HTTP2
			maxAsyncRequests: 20, // for HTTP2
			cacheGroups: {
				defaultVendors: {
					idHint: 'vendors',
					reuseExistingChunk: true,
					filename: '[name].bundle.js',
				},
			},
		},
	},
	performance: {
		// hints: 'warning',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
