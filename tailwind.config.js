const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    exlude: [
        "**/.git/**", "**/node_modules/**",
        "**/.hg/**", "**/.md/**", "**/.json/**", "**/package.json/**"
    ],
    fontFamily: {
        sans: ['Inter'],
        roboto: ['Roboto'],
    },
    darkMode: 'class',
    theme: {
        defaultTheme,
        colors,
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
        ],
}
