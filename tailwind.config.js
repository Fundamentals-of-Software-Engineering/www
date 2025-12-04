export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'fish-blue': {
          50: '#f0f5f7',
          100: '#dae6eb',
          200: '#b8ced7',
          300: '#8fadb8',
          400: '#7a9ba8',
          500: '#5d8a99',
          600: '#4a7a8c',
          700: '#3d6574',
          800: '#32525e',
          900: '#27414a',
        },
        'fish-gold': {
          300: '#E8C99B',
          400: '#D4A574',
          500: '#C4956A',
          600: '#B08050',
        },
        'fish-coral': {
          300: '#F0B8A8',
          400: '#E8A090',
          500: '#D4897A',
          600: '#C07868',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
