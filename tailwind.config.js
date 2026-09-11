/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#061321",
        deepNavy: "#0A1B2D",
        navySurface: "#10263D",
        celestialBlue: "#2F5F8D",
        brandBlue: "#4287C5",
        cyanAccent: "#5EC7E8",
        iceBlue: "#A8E4F4",
        offWhite: "#F5F8FA",
        primaryText: "#F7FAFC",
        bodyText: "#D3DCE5",
        mutedText: "#91A3B5",
        goldAccent: "#D4A843",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Manrope", "sans-serif"],
        arabic: ["var(--font-arabic)", "Noto Kufi Arabic", "sans-serif"],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(94, 199, 232, 0.25)',
        'cyan-glow-lg': '0 0 45px rgba(94, 199, 232, 0.4)',
        'blue-glow': '0 0 30px rgba(66, 135, 197, 0.22)',
        'glass-card': '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
        'cert-shadow': '0 20px 50px rgba(6, 19, 33, 0.8), 0 0 40px rgba(66, 135, 197, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'orbit-slow': 'orbitSlow 30s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        orbitSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
};
