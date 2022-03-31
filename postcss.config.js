module.exports = {
	plugins: {
		'tailwindcss': {
            configPath: './tailwind.config.js'
        },
		'autoprefixer': {
            grid: true,
            flexbox: true
        },
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}
