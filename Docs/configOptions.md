# Configuring Build System and Toolchain

___

| `Hima Dionysus Balde` |
| --- |

___
|_Webpack Config +_|_Babel, ESLint, Prettier_|
| ---------- | ---------- |
| [Prod Config](#production) | [Working On](#Future-Plugins) | [code splitting](#code-splitting) |
| [Dev Config](#development) | [Scripts](#package.json) | [Tools](#tools) |
___

## Production

### Future-Plugins

- Other plugins to review:
  - compression-webpack-plugin
  - copy-webpack-plugin
  - webpack-pwa-manifest
- loaders
  - add eslint loader

```js
module.exports = {
  plugins: [
	  (...),
	  new HtmlWebpackPlugin({
			// *! first template value needs tested
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html',
			minify: 'auto',
			cache: true,
			hash: true,
			favicon: './public/favicon.ico',
			{
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
		}),
	  new webpack.EnvironmentPlugin({
		  NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
		  DEBUG: false,
		}), // can alos use webpack-define-plugin for .env
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production)
			}
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: true
		}),]}
```

___

### Code splitting

- some default values for optimization.splitChunks
- able to add different cache groups based on type, module name, sizes and how they are split.
- plugins vary by dev or prod config and shared values can be put into a webpack.common.js file in a config folder and used with WP merge tool to sync between diff files
- ex. can compress different style and css dependencies into one vender group

```js
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
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
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },},},};
```

- use `path.sep`  or /[\\/]sample[\\/]/ in (.js) files instead of / or \, as path seperators
- allows compliant development between macOs and Windows

```js
	module.resource.includes(`${path.sep}sample_pngscacheable_svgs${path.sep}`)
	/[\\/]node_modules[\\/]|vendor[\\/]analytics_provider/
```

## Dev Config

___

### Package.json

- add scripts for multiple commands such as testing, linting, building
- Can use tools like Gulp, Grunt, Husky

```json
	"scripts": {
		"test:webpack": "npx webpack --config webpack.dev.config.js",
		"test:webpack-pro": "npx webpack --config webpack.prod.config.js",
		"build": "webpack --config webpack.prod.config.js --mode production",
		"dev": "webpack serve --config webpack.dev.config.js --mode development",
	},
  "browserslist": {
    "production": [
      "> 1%",
      "ie 10"
    ],
    "modern": [
      "last 1 chrome version",
      "last 1 firefox version"
    ],
    "ssr": [
      "node 12"
    ]
  }
```

___

## Development

### Webpack-Plugins

1. webpack dev server
2. html webpack plugin
3. webpack plugin serve
4. webpack nano

```js
// need to adjust settings for devServer & plugin serve
// will create express server and use nodemailer instead of formspree/formik in v4-5
plugins: {
	new webpack.devServer({
	hot: true,
	port: 5500,
	host: 'localhost',
	historyFallback: true,
	static: {
		directory: path.resolve(__dirname, 'dist'),
	}
})}
```

### Tools

1. Es-lint
2. Babel
3. Prettier
4. VCS (GitHub, Azure DevOps)
5. IDE (VS Code)
6. GNU Bash
