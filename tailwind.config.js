/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['html']
      // whitelistPatterns: [
      //   /--i--/,
      //   /xs:w-/,
      //   /sm:w-/,
      //   /md:w-/,
      //   /lg:w-/,
      //   /xl:w-/,
      //   /order-/,
      //   /input:focus/
      // ]
    },
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  theme: {
    colors: {
      // PRIMARY COLORS
      blue900: '#152e5f',
      blue700: '#1b4c8d',
      blue500: '#2071bd',
      blue400: '#3399e1',
      blue200: '#d8ecfa',
      blue100: '#edf5fc',
      orange: '#f2703d',

      // GRAYSCALE
      grey900: '#1a202c',
      grey700: '#4a5468',
      grey500: '#a0aec0',
      grey300: '#e2e8f0',
      grey100: '#f5f8fA',
      white: '#fff',
      black: '#000',

      // UTILITIES
      success: '#2b7e52',
      error: '#c53030',
      transparent: 'transparent'
    },
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
};
