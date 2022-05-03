const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development', // mode: {dev}
    // target: 'web',
    // externals: {
    // 	react: true,
    // },
    // resolve: {
    // 	extensions: ['.js', '.jsx'],
    // },
    // entry: path.resolve(__dirname, 'src', 'index.js'),
    // entry: {
    //     main: './src/index.js',
    // },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/', //* '/' | 'dist/
        // filename: '[name].[chunkhash].js',
        filename: 'bundle.js',
    },
    // devtool: 'source-map',
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
        hot: true,
        port: 7222,
    },
        // host: 'localhost',
        // static: {
        // 	directory: path.resolve(__dirname, 'dist'),
        // 	publicPath: '/',
        // 	// serveIndex: true, //** from dist or public? */
        // },
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
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        //     'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        //     'Access-Control-Expose-Headers': '*',
        //     'Access-Control-Max-Age': '3600',
        //     'Access-Control-Allow-Credentials': true,
        // },
        //* may need to set these for content type
        // server: {
        // 	type: 'https',
        // 	// options: {},
        // },
        /* setupMiddlewares: (middlewares, options) => {
            //* ? Learn more before using; Express w/ nodemailer?
		}, */
        // open: true,
        // historyApiFallback: true,
        // compress: true,
        // host: '0.0.0.0',
        // magicHtml: true,
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
                // loader: 'babel-loader',
                // options: {
                // 	// exclude: [/node_modules[\\/]core-js/, /node_modules[\\/]webpack[\\/]buildin/],
                // 	exclude: /node_modules/,
                // 	presets: ['@babel/preset-env', '@babel/preset-react'],
                // 	// cacheDirectory: true,
                // 	// cacheCompression: true,
                // },
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            }, //updated
            {
                // test: /[\\/].(css)$/,
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // use: [
                //     'style-loader',
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             importLoaders: 1,
                //             // sourceMap: true,
                //         },
                //     },
                //     'postcss-loader',
                // ],
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
                        },
                    },
                ],
            },
            // {
            // 	test: /\.svg$/,
            // 	type: 'asset/resource',
            // },
            {
                test: /\.(?:ico|png|jpg|jpeg|webp|svg)$/,
                type: 'asset/resource',
            },
            // {
            // 	test: /\.(woff(2)?|eot|ttf|otf)$/,
            // 	type: 'asset/inline',
            // },
        ],
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development'),
        // }),
        // new HtmlWebpackPlugin({
        // 	templateContent: ({ htmlWebpackPlugin }) =>
        // 		'<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        // 		htmlWebpackPlugin.options.title +
        // 		'</title></head><body><div id="root"></div></body></html>',
        // 	filename: '[olddev].html',
        // }),
        new HtmlWebpackPlugin({
            fileName: 'index.html',
            title: '419 Dev Ded',
            // template: './public/index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: './public/logod2.ico',
            // cache: true,
            // 	// hash: true,
            // inject: true,
            // 	// esModule: true,
            // 	// minify: {
            // 	// 	collapseWhitespace: true,
            // 	// 	minifyJS: true,
            // 	// 	minifyCSS: true,
            // 	// },
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
        // new webpack.BannerPlugin({
        // 	banner: 'Hima Balde Dev Webpack Setup 2022',
        // }),
        // new BundleAnalyzerPlugin({
        // 	// analyzerMode: 'static',
        // 	// openAnalyzer: false,
        // 	// reportFilename: 'bundle-report.html',
        // 	generateStatsFile: true,
        // 	statsFilename: 'bundle-stats.json',
        // }),
    ],
    // optimization: {
    // 	nodeEnv: 'development',
    // 	// minimize: true,
    // },
    performance: {
        hints: 'warning',
    },
};
