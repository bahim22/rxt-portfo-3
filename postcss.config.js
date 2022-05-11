// module.exports = {
// 	// Add you postcss configuration here
// 	// Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
// 	plugins: [['autoprefixer', 'tailwindcss', 'postcss-preset-env']],
// }
// module.exports = {
// 	plugins: {
// 		tailwindcss: {},
// 		autoprefixer: {},
// 	},
// };

const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssPresetEnv({
            browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
        }),
        require('cssnano')
    ]
}
