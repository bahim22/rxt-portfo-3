const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
	}, // Rules of how webpack will take files, complie/bundle them for browser
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
			/*{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },*/ //updated
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
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
			template: path.resolve(__dirname, 'public', 'index.html'),
			//template: './public/index.html',
			//fileName: './index.html'
		}),
	], // add a custom index.html as the template updated for this proj
}