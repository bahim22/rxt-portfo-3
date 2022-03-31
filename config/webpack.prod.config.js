
// current WP config for rxt-portfo-3
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin  from 'clean-webpack-plugin';
// import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.bundle.js', //path.join(_dirname, 'dist')
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
		},
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
			],
		},
	plugins: [
		new HtmlWebpackPlugin({
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html'
		}),
		new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
		}),
		new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true,
            analyzerPort: 7555,
            generateStatsFile: true,
            statsFilename: 'stats.json',
            //   statsOptions: null,
            logLevel: 'error',
            defaultSizes: 'parsed',
            reportFilename: 'report.html',
		}),
        // @ts-ignore
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
            verbose: false,
            dry: false,
            //   watch:
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: true,
            // cleanAfterEveryBuildPatterns: ['!index.html'],
            //   dangerouslyAllowCleanPatternsOutsideProject: false,
        }),
],
    resolve: {
    extensions: ['.js', '.jsx'],
    },
}
