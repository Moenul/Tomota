/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#6561AC',
        primaryStrong: '#3932ad',
        secondary: '#F3AE4B'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          xl: '0rem',
        },
        center: true,
      }
    },
  },
  plugins: [],
}

