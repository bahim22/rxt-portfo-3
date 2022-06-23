const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    // target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // publicPath: '/',
        // filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    cache: true,
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
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    // {
                    //     loader: require.resolve('postcss-loader'),
                    //     options: {
                    //         sourceMap: true,
                    //     },
                    // },
                ],
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                            esModule: true,
                            limit: 10000,
                            fallback: require.resolve('responsive-loader'),
                            quality: 85,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|webp)$/i,
                use: [
                    {
                        loader: 'responsive-loader',
                        options: {
                            adapter: require('responsive-loader/sharp'),
                            sizes: [180, 320, 512, 640, 1200, 1800],
                            placeholder: true,
                            placeholderSize: 20,
                            esModule: true,
                            progressive: true,
                            format: 'webp',
                            disable: false,
                            quality: 85,
                            name: '[path][name].[ext]',
                            // publicPath: '/',
                            // outputPath: '/assets',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'images',
                        esModule: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'public', 'index.html'),
        //     favicon: './public/logod2.ico',
        //     filename: 'dev.html',
        //     cache: true,
        //     hash: true,
        //     inject: 'body',
        //     esModule: true,
        // }),
        new HtmlWebpackPlugin({
            fileName: 'index.html',
            title: '419 Dev Ded',
            template: './public/index.html',
            favicon: './public/logod2.ico',
            cache: true,
            inject: true,
            esModule: true,
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
                },
            ],
        }),
        new webpack.BannerPlugin({
            banner: 'DedOps Webpack5 06/22',
        }),
        /* new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
            // reportFilename: '/Docs/Analysis/bundle.json',
            // generateStatsFile: true,
            // statsFilename: '/Docs/Analysis/stats.json',
        }), */
    ],
    optimization: {
        nodeEnv: 'development',
    },
    // performance: {
    //     hints: 'warning',
    // },
};
