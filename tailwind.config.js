/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn': '10px 10px 30px rgba(255, 203, 71, 0.3)',
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif',
        'dif': 'Elsie Swash Caps',
      },
      colors: {
        gray: {
          100: '#C4C4C4'
        },
        orange: {
          200: '#202020',
          300: '#FFCB47',
        }
      },
      backgroundImage: {
        backg: 'url(/src/assets/bg.png)',
        vector: 'url(/src/assets/Vector.png)',
      },
      plugins: [],
    }
  }
}
