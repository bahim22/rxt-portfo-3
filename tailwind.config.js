// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    exlude: ["**/.git/**", "**/node_modules/**"],
	darkMode: 'class',
    plugins: [
        require('@tailwindcss/forms'), require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
	theme: {
		extend: {
			spacing: {
				'7/16': '43.75%',
			},
			lineHeight: {
				11: '2.5rem',
				12: '2.75rem',
				13: '3.0rem',
				14: '3.25rem',
			},
			fontFamily: {
				sans: ['Inter', 'Roboto'],
			},
			colors: {
				primary: colors.slate,
				gray: colors.black,
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.600'),
							},
							code: {color: theme('colors.primary.400')},
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.900'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900'),
						},
						pre: {
							backgroundColor: theme('colors.gray.800'),
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
						},
						hr: {borderColor: theme('colors.gray.200')},
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.500'),
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.500'),
						},
						strong: {color: theme('colors.gray.600')},
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200'),
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.400'),
							},
							code: {color: theme('colors.primary.400')},
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.100'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.100'),
						},
						pre: {
							backgroundColor: theme('colors.gray.800'),
						},
						code: {
							backgroundColor: theme('colors.gray.800'),
						},
						details: {
							backgroundColor: theme('colors.gray.800'),
						},
						hr: {borderColor: theme('colors.gray.700')},
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.400'),
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.400'),
						},
						strong: {color: theme('colors.gray.100')},
					},
				},
			}),
		},
	}
}
