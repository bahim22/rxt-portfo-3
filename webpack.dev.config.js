import { resolve as _resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export const mode = 'development'
export const entry = _resolve( __dirname, 'src', 'index.js' )
export const output = {
    path: _resolve( __dirname, 'dist' ),
    filename: 'bundle.js', //path.join(_dirname, 'dist')
}
export const devServer = {
		port: 3222,
        devTool: 'source-map',
        watchContentBase: [
            {
                'development': true,
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
                // 'overlay': true,
                // 'proxy': {
                //     '/api': {
                //         target: 'http://localhost:3000',
                //         secure: false
                //         }
                //     }
            }
            ],
	}
export const module = {
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
                        mimetype: 'image/png',
                    }
                }
            ]
        },
    ],
}
export const plugins = [
    new HtmlWebpackPlugin( {
        // template: path.resolve(__dirname, 'public', 'index.html'),
        template: './public/index.html',
        fileName: './index.html'
    } ),
]
export const resolve = {
    extensions: [ '.js', '.jsx' ],
}
