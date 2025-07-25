module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          background3: 'var(--global-bg-3)',
          background4: 'var(--global-bg-4)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)',
          text4: 'var(--global-text-4)',
          text5: 'var(--global-text-5)',
        },
        button: {
          background1: 'var(--button-bg-1)',
          text1: 'var(--button-text-1)',
        },
        footer: {
          background1: 'var(--footer-bg-1)',
          text1: 'var(--footer-text-1)',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-gentle': 'pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
