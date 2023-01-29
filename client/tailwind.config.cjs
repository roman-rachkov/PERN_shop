/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
        minHeight: {
            page: 'calc(100vh - 160px - 4rem)'
        },
        width:{
            'p-3/4': 'calc(75% - 10px)',
            'p-1/4': 'calc(25% - 10px)',
        }
    },
  },
  plugins: [],
}
