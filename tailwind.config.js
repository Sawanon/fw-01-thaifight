/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'test': "green"
      },
      boxShadow: {
        'button': '0px 4px',
        'button-sm': '0px 2px',
        'only-shadow': '0 30px 40px',
      },
      fontFamily: {
        'prompt': 'Prompt'
      },
      animation: {
        'marquee': 'marquee 10s linear infinite'
      },
      keyframes: {
        'marquee': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '80%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-10%)',
          },
        }
      }
    },
  },
  plugins: [],
}

