// 	// Add you postcss configuration here

// const { default: postcss } = require( "postcss" )

// 	// Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
module.exports = {
	plugins: [['autoprefixer', 'tailwindcss', 'postcss-preset-env']],
}
module.exports = {
	plugins: {
		'tailwindcss': {},
		'autoprefixer': {},
        'postcss-preset-env': {},
	},
};

// const postcssPresetEnv = require('postcss-preset-env');

// module.exports = {
//     plugins: [
//         postcssPresetEnv({
//             browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
//         }),
//         require('cssnano')
//     ]
// }
/* const tailwindcss = require('tailwindcss');
// const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');

module.exports = {
    plugins: {
        tailwindcss: { tailwindcss },
        autoprefixer: { autoprefixer },
        postcsspresetenv: { postcsspresetenv },
    },
};
// ? formspree root info
{
  "forms": {
    "contactForm": {
      "name": "Contact Form",
      "actions": [{
        "type": "email",
        "to": "email@gmail.com"
      }]
    }
  }
}
 */
