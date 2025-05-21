module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        arcane: "#0a0a0a",
        ember: "#e04e2f",
        storm: "#3a6ea5",
        frost: "#7dd3fc",
        clay: "#7b5e57",
        aether: "#c084fc",
        gold: "#b3a67d",
      },
      fontFamily: {
        gothic: ["Cinzel", "serif"],
      },
      boxShadow: {
        'glow-ember': '0 0 15px rgba(224, 78, 47, 0.5)',
        'glow-storm': '0 0 15px rgba(58, 110, 165, 0.5)',
        'glow-frost': '0 0 15px rgba(125, 211, 252, 0.5)',
        'glow-clay': '0 0 15px rgba(123, 94, 87, 0.5)',
        'glow-aether': '0 0 15px rgba(192, 132, 252, 0.5)',
        'glow-gold': '0 0 15px rgba(179, 166, 125, 0.3)',
      },
      backgroundImage: {
        'arcane-texture': "url('/src/assets/textures/dark-texture.png')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
