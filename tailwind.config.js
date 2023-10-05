module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#ff9f0d',
        accent: '#ff9f0d',
       
      },
      backgroundImage: {
        about: "url('./assets/me.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
