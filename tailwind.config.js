/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        'custom-purple': {
          DEFAULT: '#382AE1',
          light: '#766CF1'
        }
      }
  
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

