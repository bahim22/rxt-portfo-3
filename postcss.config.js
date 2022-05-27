// const { default: postcss } = require( "postcss" )

module.exports = {
    plugins: [['autoprefixer', 'tailwindcss', 'postcss-preset-env']],
};
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-preset-env': {},
    },
};
