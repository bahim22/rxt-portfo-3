// const postcssPresetEnv = require('postcss-preset-env');
// const autoprefixer = require('autoprefixer');

// module.exports = {
//     plugins: {
//         tailwindcss: {},
//         'postcss-preset-env': {},
//         autoprefixer: {},
//         cssnano: {},
//     },
// };

// const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssPresetEnv({
            browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
        }),
        autoprefixer(),
        require('cssnano'),
    ],
};

// module.exports = {
//     plugins: [
//         tailwindcss(),
//         // 'postcss-preset-env': {},
//         postcssPresetEnv(),
//         autoprefixer(),
//         require('cssnano'),
//     ],
// };

// module.exports = {
//     plugins: [['autoprefixer', 'tailwindcss', 'postcss-preset-env']],
// };
