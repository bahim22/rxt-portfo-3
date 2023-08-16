const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV == 'development';
// const isDev = process.env.NODE_ENV == 'development';

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
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/', //* '/' | 'dist/
        // filename: '[name].[chunkhash].js',
        filename: 'bundle.js',
    },
    //devtool: 'source-map',
    cache: true,
    // stats: true,
    devServer: {
        hot: true,
        port: 7222,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            'Access-Control-Expose-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': true,
        },
        //host: '0.0.0.0',
        compress: true,
        allowedHosts: ['https://4wv453-7222.csb.app/', '.csb.app'],
    },
    // open: true,
    // compress: true,
    // host: 'localhost',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // loader: 'babel-loader',
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        // presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
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
                // use: ['style-loader', 'css-loader'],
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {

                        // }
                    },
                ],
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new HtmlWebpackPlugin({
            // templateContent: ({ htmlWebpackPlugin }) =>
            //     '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, height=device-height, shrink-to-fit=no"><title>' +
            //     htmlWebpackPlugin.options.title +
            //     '</title></head><body><div id="root"></div></body></html>',
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: './public/logod2.ico',
            filename: 'dev.html',
            cache: true,
            hash: true,
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            fileName: 'index.html',
            title: '419 Dev Ded',
            template: './public/index.html',
            // template: './public/index.html',
            // template: path.join(__dirname, 'public', 'index.html'),
            favicon: './public/logod2.ico',
            cache: true,
            // 	// hash: true,
            // inject: true,
            // 	// esModule: true,
            minify: {
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets',

                    globOptions: {
                        ignore: ['*.js', '*.css'],
                    },
                    // force: true,
                    // toType: 'template'
                    to: 'assets',
                },
            ],
        }),
        new webpack.BannerPlugin({
            banner: 'Hima Balde Dev Webpack Setup 2022',
        }),
        // new BundleAnalyzerPlugin({
        // analyzerMode: 'static',
        // // openAnalyzer: true,
        // reportFilename: 'bundle-report.html',
        // generateStatsFile: true,
        // statsFilename: 'bundle-stats.json',
        // }),
    ],
    optimization: {
        nodeEnv: 'development',
        minimize: true,
    },
    performance: {
        hints: 'warning',
    },
};
