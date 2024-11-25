/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#173e62',
        secondary: '#BDA588',
        hover: '#AC8D68',
        accent: '#F39C12',
        background: '#F5F5F5',
        headingText: '#173E62',
        paraText: '#66717A',
        white: '#FFFFFF',
        gray: {
          light: '#F7F7F7',
          DEFAULT: '#C0C0C0',
          dark: '#A0A0A0',
        },
      },
      spacing: {
        18: '4.5rem', // Custom spacing
        72: '18rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {},
  plugins: [],
}
