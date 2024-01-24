/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        full: ' 0 0 0 2px indigo',
      },
      animation:{
        'up': 'translate-y-2 duration-100',
      },
      fontFamily:{
        'body':['Cedarville Cursive'],
        'poppins':['Poppins'],
      }
      
    },
    colors:{
      'indigo': '#50d71e',
      'violet':'#6d28d9',
      'green':'#84cc16',
      'rose': '#be123c',
      'red': 'red-600',
      'logo-match':'#f1f2f6',
      'logo':'#ffffff',
      'white': '#ffff'
    }
  },
  plugins: [],
}

