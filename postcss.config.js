module.exports = {
	plugins: {
		'tailwindcss': {
            configPath: './tailwind.config.js',
            // cssPath: './src/styles/tailwind.css',
            // purgecss: {
            //     enabled: true,
            // },
        },
		'autoprefixer': {
            grid: true,
            flexbox: true,
            browsers: ['last 2 versions', 'ie >= 11', 'Android >= 4.4', 'iOS >= 9'],
        },
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}
