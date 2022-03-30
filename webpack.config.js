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
    // watchContentBase:
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
