module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      twitter: [
        '"Segoe UI"',
        'Meiryo',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
      ],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536pxF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
