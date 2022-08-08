/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    ripple: theme => ({
        colors: theme('colors'),
        modifierTransition: 'background 0.2s',
        activeTransition: 'background 0.1s'
    }),
    extend: {
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwindcss-ripple')()
  ],
}
