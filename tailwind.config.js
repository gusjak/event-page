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
        'henry-sally-dance': "url('../img/sally-henry-dance.svg')",
        'event-gift': "url('../img/event-gift.svg')",
        'mikkeller-glass': 'url(../img/mikkeller-beerglass.png)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 3s ease-in forwards',
        jump: 'jump 2s ease-in-out infinite',
      },
      inset: {
        '4/9': '45%',
        '2/5': '40%',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
};
