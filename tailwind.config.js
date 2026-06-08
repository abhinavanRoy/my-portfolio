/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "google-sans": ["Google Sans", "sans-serif"],
      "jetbrains-mono": ["JetBrains Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
      paprika: ["Paprika", "sans-serif"],
      playwrite: ["Playwrite AU VIC", "cursive"],
    },
    screens: {
      'sm': '690px',
      'md': '740px',
      'lg': '1024px'
    },

    extend: {
      colors: {
        cream: "#F5ECD7",
        latte: "#C9A87C",
        espresso: "#7B5B3A",
        "deep-brown": "#3D2B1F",
        tan: "#E0C9A6",
        "dark-bg": "#1B1510",
        "dark-surface": "#2A211A",
        "dark-text": "#F7F1E8",
        "dark-muted": "#D8C9B5",
        "dark-border": "#4A3A2D",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "cursor-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "tick-pop": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "fade-in-up-delayed": "fade-in-up 0.5s ease-out 0.2s forwards",
        "fade-in-up-delayed-2": "fade-in-up 0.5s ease-out 0.4s forwards",
        "fade-in-up-delayed-3": "fade-in-up 0.5s ease-out 0.6s forwards",
        "fade-in-left": "fade-in-left 0.5s ease-out forwards",
        "fade-in-right": "fade-in-right 0.5s ease-out forwards",
        "tick-pop": "tick-pop 0.35s ease-out",
      },
    },
  },
  plugins: [],
}

/**
 * sm -> mobile -> till 340
 * md -> tablet -> till 800
 * lg -> laptop -> till 1024
 * xl -> desktop -> till 1280
 */