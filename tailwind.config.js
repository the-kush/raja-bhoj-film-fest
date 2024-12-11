/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sanf-serif'],
        general: ['general', 'sanf-serif'],
        'circular-web': ['circular-web', 'sanf-serif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-regular': ['robert-regular', 'sanf-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66',
        }
      },
    },
  },
}
