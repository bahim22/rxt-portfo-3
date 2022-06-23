// const postcssPresetEnv = require('postcss-preset-env');
// const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        // 'postcss-nesting',
        // 'postcss-flexbugs-fixes',
        'tailwindcss',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
        // 'postcssNormalize',
        'cssnano',
    ],
};
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');
// const postcssPresetEnv = require('postcss-preset-env');

// module.exports = {
//     plugins: [
//         postcssPresetEnv({
//             browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
//         }),
//         autoprefixer(),
//         require('cssnano'),
//     ],
// };

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
