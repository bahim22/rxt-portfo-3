
# Additional WebPack configs and devDep

```js
// refactored current WP to use es6
import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 const config = {
 mode: 'production',
  entry: resolve(__dirname,'src','index.js'),
  output: {
  // the output of the webpack build will be in /dist directory
  path: resolve(__dirname,'dist'),
  // the filename of the JS bundle will be bundle.js
  filename: 'bundle.js', //path.join(_dirname, 'dist')
},
  devServer: {
  port: 3222,
  //watchContentBase: true,
},
  module: {
    rules: [
    {
      // for any file with a suffix of js or jsx
      test: /\.(js|jsx)$/,

      // ignore transpiling JS from node_modules as it should be that state
      exclude: /node_modules/,
      // use the babel-loader for transpiling JavaScript to a suitable format
      use: {
        loader: 'babel-loader',
      },
    },
    // {
    //   test: /\.html$/,
    //   use: [
    //     {
    //       loader: "html-loader"
    //     }
    //   ]
    // }, //updated
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
    // change css & postcss loaders to the minifier option below
    /*    {
         test: /\.css$/,
         use: [
           MiniCssExtractPlugin.loader,
           {
             loader: 'css-loader',
             options: {
               importLoaders: 1
             }
           },
           'postcss-loader'
         ]
       }, */
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
  /*  new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }) */
]
}

module.exports = config;
```

```js
// <!-- npx webpack-cli init (create WP config file) -->
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;

```

## Dependencies added

- MiniCssExtractPlugin()
- CleanWebpackPlugin()
- BundleAnalyzerPlugin()
- ts loader
- url loader
- file loader

devDep
"file-loader": "^6.2.0", //svg
"url-loader": "^4.1.1" //png

D. `WebPack`

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier

npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```

```bash
  npm install webpack webpack-cli webpack-dev-server --save-dev
  npm install webpack webpack-cli --save-dev
```

```js
const path = require('path')
module.exports = {
entry: './src/app.js',
output: {
  path: path.join(_name, 'public'),
  filename: 'bundle.js',
},}
```

## Current packages

- webpack _Module bundler_ to convert code into prod ready site
- Webpack CLI
- webpack-plugin-server //dev server via local
- npx webpack --config webpack.config.js //test config file
- html-webpack-plugin _pre-gen basic html doc or make your own_

## Other devDep **Webpack plugins**

- _Bundle_ info "webpack-bundle-analyzer": "^4.5.0"
- _Nano_ webpack-nano
- _Mini-css_ "mini-css-extract-plugin": "^2.5.3" // minify css //\\
- _Clean_ webpack "clean-webpack-plugin": "^4.0.0"
  - removes contents of output dir before building (script: "clean": "rm dist/bundle.js")

> _Add_ to plugins array in WP config file
