module.exports = {
	plugins: {
		'tailwindcss': {},
		'autoprefixer': {
            grid: true,
            flexbox: true
        },
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}
