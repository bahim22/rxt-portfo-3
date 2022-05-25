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
        publicPath: 'auto', // *? '/dist'
        chunkFilename: '[name].[chunkhash].js',
        // filename: 'main.[chunkhash].js',
        filename: 'js/[name].[contenthash].js',
        clean: true,
    },
    devtool: 'source-map', // ? change before deploy
    // cache: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
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
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
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
                            // sourceMap: true,
                        },
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
                test: /\.(png|jpg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                            limit: 10000,
                            // fallback: require.resolve('responsive-loader'),
                            quality: 85,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                // use: 'file-loader',
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.75, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 85,
                            },
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
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, 'public', 'index.html'),
            template: './public/index.html',
            filename: 'index.html',
            favicon: './public/logod2.ico',
            cache: true,
            minify: {
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
                // removeRedundantAttributes: true,
                removeComments: true,
            },
            hash: true,
        }),
        new webpack.BannerPlugin({
            banner: 'Hima Balde Production 2022',
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
                    from: 'src/assets',
                    globOptions: {
                        ignore: ['*.js', '*.css'],
                    },
                },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
            reportFilename: 'bundle-report.html',
            generateStatsFile: true,
            statsFilename: 'bundle-stats.json',
        }),
        '...',
    ],
    optimization: {
        nodeEnv: 'production',
        minimize: true,
        minimizer: [
            // minimizer: [new CssMinimizer(), '...'],
            // new CssMinimizerPlugin({
            //     parallel: true,
            //     minify: CssMinimizerPlugin.cleanCssMinify,
            // }),
            new MiniCssExtractPlugin(),
            '...',
            new TerserPlugin({
                parallel: true,
                minify: TerserPlugin.swcMinify,
                terserOptions: {
                    compress: true,
                    mangle: {
                        safari10: true,
                        SimpleIdentifierMangler: true,
                        MinimizerOptions: {},
                        ecma: 2020,
                    },
                    keep_classnames: true,
                    keep_fnames: true,
                    // ecma: 2020,
                    parse: {},
                    nameCache: {},
                    // module: true,
                },
                include: /[\\/].min[\\/].js$/,
                exclude: /[\\/]node_modules/,
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
                // default: {
                //     minChunks: 3,
                //     name: false,
                //     priority: -20,
                //     reuseExistingChunk: true,
                // },
                // styles: {
                //     name: false,
                //     type: 'css/mini-extract',
                //     chunks: 'all',
                //     enforce: true,
                // },
            },
        },
    },
    performance: {
        hints: 'warning',
    },
};
