const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV == 'production';
// const isProduction = process.env.NODE_ENV == 'production';

module.exports = {
    mode: 'production',
    // mode: isProduction,
    // target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
        // fallback:[
        //     { "path": false },
        //     { "os": false }
        // ],
    },
    // entry: {
    //     main: './src/index.js',
    // },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', // *? '/dist'
        chunkFilename: '[name].[chunkhash].js',
        // filename: 'bundle.js', // *? 'bundle.js'
        // filename: 'main.[chunkhash].js',
        filename: 'js/[name].[contenthash].bundle.js',
        clean: true,
    },
    devtool: 'eval-cheap-source-map', //'inline-sourceMap', // false,
    cache: true,
    module: {
        rules: [
            {
                // test: /\.(m?js|js|jsx)$/i,
                // exclude: /(node_modules|bower_components)/,
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: false,
                            // modules: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
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
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     type: 'asset/inline',
            // },
            // {
            //     test: /\.(?:ico|png|jpg|jpeg|webp|svg)$/,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            favicon: './public/favicon2.ico',
            cache: true,
            hash: true,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                minifyJS: true,
                minifyCSS: true,
            },
        }),
        new webpack.BannerPlugin({
            banner: 'Hima Balde Production Setup 2022',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            // ignoreOrder: true,
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    // to: 'assets',
                    globOptions: {
                        ignore: ['*.js', '*.css'],
                    },
                },
            ],
        }),
    ],
    optimization: {
        nodeEnv: 'production',
        minimize: true,
        minimizer: [
            new MiniCssExtractPlugin(),
            '...',
            new CssMinimizerPlugin({
                parallel: true,
                minify: CssMinimizerPlugin.cleanCssMinify,
            }),
            '...',
            new TerserPlugin({
                parallel: true,
                minify: TerserPlugin.swcMinify,
                terserOptions: {
                    compress: {},
                    // // ecma: 2020,
                    // parse: {},
                    // nameCache: {},
                    // mangle: {},
                    // module: true,
                },
                // include: /[\\/].min[\\/].js$/,
                // exclude: /[\\/]node_modules/,
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
                vendors: {
                    test: /[\\/]node_modules[\\/][\\/]vendors[\\/]|[\\/]@tailwindcss[\\/]|[\\/]@fortawesome[\\/]|[\\/]@emotionreact[\\/]|[\\/]@emotion[\\/]|[\\/]@mui/,
                    name: false,
                    chunks: 'all',
                    enforce: true,
                },
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    idHint: 'vendors',
                    filename: 'vendors/[name].bundle.js',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                // defaultVendors: {
                // idHint: 'vendors',
                // reuseExistingChunk: true,
                // filename: 'vendors/[name].bundle.js',
                // },
                // ? prob don't need this due to minicss
                // styles: {
                //     name: 'styles',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true,
                // },
            },
        },
    },
    performance: {
        // hints: 'warning',
    },
};
