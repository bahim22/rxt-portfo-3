
// current WP config for rxt-portfo-3
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	// the output bundle mode: prod or dev; changed via scripts in pack.json
	mode: 'production',
	// the app entry point is /src/index.js
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		// the output of the webpack build will be in /dist directory
		path: path.resolve(__dirname, 'dist'),
		// the filename of the JS bundle will be bundle.js
		filename: 'bundle.js', //path.join(_dirname, 'dist')
	},
	devServer: {
		port: 3222,
		//watchContentBase: true,
	}, // Rules of how WP will take files, compile/bundle them for browser
	module: {
		rules: [
			{
				// for any file with a suffix of js or jsx
				test: /\.(js|jsx)$/, //test: /\.jsx?$/
				// ignore transpiling JS from node_modules as it should be that state
				exclude: /node_modules/,
				// use the babel-loader for transpiling JavaScript to a suitable format
				use: {
					loader: 'babel-loader',
				},
			},
/*       {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }, */
      // change css & postcss loaders to the minifier option below
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
		//   'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
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
              mimetype: 'image/png'
            }
          }
        ]
      }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html'
		}),
    new MiniCssExtractPlugin({
		filename: 'miniCssEx.css',
		chunkFilename: 'chunkFileMini.css',
		// fallback: 'style-loader',
		

	}),
    new CleanWebpackPlugin({
	  cleanOnceBeforeBuildPatterns: ['**/*', '!index.html'],
	  verbose: false,
	  dry: false,
	//   watch:
	  cleanStaleWebpackAssets: true,
	  protectWebpackAssets: false,
	  cleanAfterEveryBuildPatterns: ['!index.html'],
	//   dangerouslyAllowCleanPatternsOutsideProject: false,

	}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      openAnalyzer: true,
	  analyzerPort: 7222,
	  generateStatsFile: true,
	  statsFilename: 'stats.json',
	//   statsOptions: null,
	  logLevel: 'info',
	  defaultSizes: 'parsed',
	  reportFilename: 'report.html',
    })
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
	  '.jsx'
    ]
  }, // add a custom index.html as the template updated for this proj
}
