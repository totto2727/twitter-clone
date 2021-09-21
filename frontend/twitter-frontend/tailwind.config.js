module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xs: { raw: '(min-height: 500px) and (min-width:480px)' },
      sm: { raw: '(min-height: 500px) and (min-width:640px)', min: '640px' }, //'640px',
      md: { raw: '(min-height: 500px) and (min-width:768px)' }, //'768px',
      lg: { raw: '(min-height: 500px) and (min-width:1024px)' }, //'1024px',
      xl: { raw: '(min-height: 500px) and (min-width:1280px)' }, //'1280px',
      '2xl': { raw: '(min-height: 500px) and (min-width:1536px)' }, //'1536px',
    },
    extend: {
        colors: {
          "alt-white": "#D9D9D9"
        },
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
