module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'btnRed': '#ba2e5a',
        'abtBg': '#f8f9fa',
        'resourceBoxBorder': '#00000020'
      },
      animation: {
        'fade': 'fade ease 3s'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
