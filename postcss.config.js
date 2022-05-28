const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        tailwindcss(),
        // 'postcss-preset-env': {},
        postcssPresetEnv(),
        autoprefixer(),
        require('cssnano'),
    ],
};

// module.exports = {
//     plugins: [['autoprefixer', 'tailwindcss', 'postcss-preset-env']],
// };
