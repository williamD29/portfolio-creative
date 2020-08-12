/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        darkSelector: '.dark-mode',
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        backgroundColor: [
            'responsive',
            'hover',
            'focus',
            'active',
            'dark',
            'dark-hover',
            'dark-group-hover',
            'dark-even',
            'dark-odd',
        ],
        borderColor: [
            'dark',
            'dark-disabled',
            'dark-focus',
            'dark-focus-within',
        ],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
    },
    plugins: [require('@tailwindcss/ui'), require('tailwindcss-dark-mode')()],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },
}
