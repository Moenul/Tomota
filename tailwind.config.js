/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#F7FAFC',
        section:'#FFFFFF',
        accent:'#5A67D8',
        accentText:'#FFFFFF',
        accentHover:'#434190',
        text:'#2D3748',
        textSecondary:'#4A5568',
        textMuted:'#A0AEC0',
        border:'#E2E8F0',


        primaryDark:'#1A202C',
        sectionDark:'#2D3748',
        accentDark:'#5A67D8',
        accentTextDark:'#FFFFFF',
        accentHoverDark:'#7F8FE0',
        textDark:'#E2E8F0',
        textSecondaryDark:'#A0AEC0',
        textMutedDark:'#718096',
        borderDark:'#4A5568',

        success: '#48BB78',
        warning: '#ECC94B',
        errors: '#E53E3E',

        primaryStrong: '#3932ad',
        secondary: '#F3AE4B'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          xl: '0rem',
        },
        center: true,
      },
      boxShadow: {
        'a-sm': '0px 0px 2px 0 rgba(0, 0, 0, 0.5)',
        'a-md': '0px 0px 6px -2px rgba(0, 0, 0, 0.5)',
        't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

