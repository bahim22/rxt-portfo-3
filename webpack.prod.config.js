// const webpack = require('webpack');
// const paths = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'js/[name].[contenthash].js',
		// filename: 'build.bundle.js'
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
				}
			},
		},
		{
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader,
			// 'style-loader',
			{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
			}
			},
			'postcss-loader',
		]
		},
		{
			test: /\.(?:ico|png|jpg|jpeg)$/i, type: 'asset/resource',
		},
		{
			test: /\.(woff(2)?|eot|ttf|otf|svg)$/, type: 'asset/inline',
		},
		{
		test: /\.svg$/,
		use: 'file-loader'
		},
		/*{
		 test: /\.png$/,
		use: [
			{
			loader: 'url-loader',
			options: {
				mimetype: 'image/png',
				limit: 8192,
				name: 'images/[name].[ext]'}
			}
		]
		},*/
	],
},
plugins: [
	new HtmlWebpackPlugin({
		// template: path.resolve(__dirname, 'public', 'index.html'),
		template: './public/index.html',
		fileName: './index.html',
		// inject: 'body',
		minify: 'auto',
		favicon: './public/favicon.ico',
		/* {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		}, */
	}),
	new MiniCssExtractPlugin({
		filename: '[name].css',
		filename: 'styles/[name].[contenthash]css',
		chunkFilename: '[id].css'
	}),
	/* new BundleAnalyzerPlugin({
		analyzerMode: 'static',
		openAnalyzer: true
	}), */
],
optimization: {
	minimize: true,
	minimizer: [ new MiniCssExtractPlugin()], /* new OptimizeCSSAssetsPlugin(), new TerserPlugin()],  */
	runtimeChunk: 'single',
	moduleIds: 'deterministic',
	splitChunks: {
		chunks: 'all',
		cacheGroups: {
			vendors: {
				test: /[\\/]node_modules[\\/]/,
			},
			styles: {
				name: 'styles',
				test: /\.css$/,
				chunks: 'all',
				enforce: true,
			},
		}
	},
},
performance: {
	hints: false,
	maxEntrypointSize: 512000,
	maxAssetSize: 512000,
},
resolve: {
	extensions: ['.js', '.jsx', '.json'],
	modules: [
		path.resolve(__dirname, 'src'),
		path.resolve(__dirname, 'node_modules')
	],
	alias: {
		'@': path.resolve(__dirname, 'src'),
		'@components': path.resolve(__dirname, 'src/components'),
		'@assets': path.resolve(__dirname, 'public/assets'),
		'@styles': path.resolve(__dirname, 'src/styles'),
		// '@pages': path.resolve(__dirname, 'src/pages'),
		// '@utils': path.resolve(__dirname, 'src/utils'),
	},
},
}
