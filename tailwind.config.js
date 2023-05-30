/** @type {import('tailwindcss/types').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        muted: '#a8bac3',
        primary: '#607D8B',
        primaryAdmin: '#673ab7',
        primaryHover: '#03a9f4',
        secondary: '#f5f5f5',
        bgAdmin: '#f4f5fa',
        dark: '#344A55',
        breadcrumb: '#ed145b',
        breadcrumbActive: '#777',
        utils: '#ffab40',
        utils2: '#8bc34a',
        txt: '#202020',
        txt2: '#666',
        txt3: '#333',
        txt4: '#666',
        txt5: '#464855',
        txt6: '#6b6f82',
        txt7: '#607d8b',
        success: '#8bc34a',
        info2: '#00bcd4',
        green: '#4CAF50',
        warning: '#ffc107',
        danger: '#f44336',
        info: '#00bcd4',
        pending: '#607d8b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
