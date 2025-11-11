/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E642E',
          dark: '#164A22',
        },
        secondary: {
          DEFAULT: '#9ACD32',
          dark: '#7BA428',
        },
        success: '#388E3C',
        alert: '#DC143C',
        warning: '#FFD700',
        neutral: {
          dark: '#2C2C2C',
          medium: '#757575',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
      }
    },
  },
  plugins: [],
}
