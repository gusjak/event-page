module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F0F0F0',
        'primary-green': '#005B5D',
        'accent-green': '#ABECB1',
        'softer-black': '#111111',
        'pastel-yellow': '#F0EFAF',
        'pastel-red': '#EF7E73',
        'pastel-blue-light': '#AED9F0',
        'pastel-blue-middle': '#81C3E8',
        'pastel-blue-dark': '#2C7BE5',
        'pastel-pink': '#FFD0DB',
        'pastel-pink-beer': '#FFD3DE',
        'pastel-green-dark': '#70AE8C',
        'pastel-green-light': '#EEFBEF',
      },
      textColor: ['active, focus, hover'],
      fontFamily: {
        'text-title': 'Mikkelwind',
        'text-regular': 'RalewayRegular',
        'text-medium': 'RalewayMedium',
        'text-bold': 'RalewayBold',
      },
      screens: {
        lg: '1100px',
        // => @media (min-width: 1100px) { ... }
      },
      backgroundImage: {
        'event-gift': "url('../img/event-gift.svg')",
        'mikkeller-glass': 'url(../img/mikkeller-beerglass.webp)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        wiggleHard: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%': { transform: 'none' },
          '15%': { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
          '30%': { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
          '45%': { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
          '60%': { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
          '70%': { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
          '100%': { transform: 'none' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        wiggleHard: 'wiggleHard 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in forwards',
        shake: 'shake 2s infinite',
      },
      inset: {
        '30p': '30%',
        '35p': '35%',
        '42p': '42%',
        '47p': '47%',
        '48p': '48%',
        '4/9': '45%',
        '2/5': '40%',
      },
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    animation: ['hover, focus'],
    fill: ['hover, focus'],
  },
  plugins: [],
};
