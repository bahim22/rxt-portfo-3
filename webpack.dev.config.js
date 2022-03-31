const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// the output bundle mode: prod or dev; changed via scripts in pack.json
	mode: 'development',
	// the app entry point is /src/index.js
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		// the output of the webpack build will be in /dist directory
		path: path.resolve(__dirname, 'dist'),
		// the filename of the JS bundle will be bundle.js
		filename: 'bundle.js', //path.join(_dirname, 'dist')
	},
	devtool: 'source-map',
	/* devServer: {
		port: 3222,
        // watchContentBase: true,
		'headers': {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type Authorization',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Max-Age': '3600'
		},
		'hot': true,
		'liveReload': true,
		'server': 'http://localhost:3000',
		'client':{},
		'open': true,
		'port': 4500,
		// 'host': 'localhost',
		'historyApiFallback': true,
		'compress': true,

		// 'overlay': true,
		// 'proxy': {
		//     '/api': {
		//         target: 'http://localhost:3000',
		//         secure: false
		//         }
		//     }
	}, */
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
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
                    }
                },
                {
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
					}
				},
            ],
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
    new HtmlWebpackPlugin( {
        // template: path.resolve(__dirname, 'public', 'index.html'),
        template: './public/index.html',
        fileName: './index.html'
    } ),
],
resolve: {
    extensions: [ '.js', '.jsx' ],
},
}
