const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV == 'production';

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'auto', // *? '/dist'
        chunkFilename: 'js/[name].[chunkhash].js',
        filename: 'js/[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[hash][ext]',
    },
    // devtool: 'source-map', // ? change before deploy
    cache: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: true,
                        compact: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(?:ico|png|jpg|jpeg|webp|svg)$/,
                type: 'asset',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(png|jpg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // mimetype: 'image/png',
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
                            // name: '[path][name].[ext]',
                            // publicPath: '/',
                            // outputPath: 'images',
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
                        // outputPath: 'images',
                        // esModule: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: './public/logod2.ico',
            cache: true,
            minify: {
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
                removeRedundantAttributes: true,
                removeComments: true,
                keepClosingSlash: true,
            },
            hash: true,
        }),
        new webpack.BannerPlugin({
            banner: 'production 0602',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[chunkhash].css',
            // ignoreOrder: true,
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    globOptions: {
                        ignore: ['*.js', '*.css'],
                    },
                    // transform: {
                    //     transformer(content, path) {
                    //         return Promise.resolve(optimize(content));
                    //     },
                    // },
                },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'json',
            openAnalyzer: false,
            reportFilename: 'report/bundle-report.json',
            generateStatsFile: false,
            // statsFilename: 'report/bundle-stats.json',
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
            // new CssMinimizerPlugin(), '...',
            new TerserPlugin({
                parallel: true,
                minify: TerserPlugin.swcMinify,
                terserOptions: {
                    parse: { ecma: 2017 },
                    compress: {
                        ecma: 5,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                        // SimpleIdentifierMangler: true,
                        // MinimizerOptions: {},
                        // ecma: 2020,
                    },
                    keep_classnames: true,
                    keep_fnames: true,
                    // ecma: 2020,
                    // nameCache: {},
                    // module: true,
                },
                // include: /[\\/].min[\\/].js$/,
                // exclude: /[\\/]node_modules/,
            }),
        ],
        // portableRecords: true,// ? makes records w/ rel path to move context -f
        providedExports: true,
        usedExports: true,
        removeEmptyChunks: true,
        concatenateModules: true,
        mangleExports: 'deterministic',
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        runtimeChunk: 'single',
        mergeDuplicateChunks: true,
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '~',
            maxInitialRequests: 20, // for HTTP2
            maxAsyncRequests: 20, // for HTTP2
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]|[\\/]vendors[\\/]|[\\/]@tailwindcss[\\/]|[\\/]@fortawesome[\\/]|[\\/]@emotionreact[\\/]|[\\/]@emotion[\\/]|[\\/]@mui/,
                    name: false,
                    chunks: 'all',
                    idHint: 'usedVendors',
                },
                // defaultVendors: {
                //     test: /[\\/]node_modules[\\/]/,
                //     priority: -10,
                //     reuseExistingChunk: true,
                //     name: false,
                //     idHint: 'defaultVendors',
                //     // filename: 'vendors/[name].bundle.js',
                // },
                // default: {
                //     minChunks: 2,
                //     idHint: 'default',
                //     name: false,
                //     priority: -20,
                //     reuseExistingChunk: true,
                // },
            },
        },
    },
};
