/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "google-sans": ["Google Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      paprika: ["Paprika", "sans-serif"],
      playwrite: ["Playwrite AU VIC", "cursive"],
    },
    screens: {
      'sm': '600px',
      'md': '740px',
      'lg': '1024px'
    },

    extend: {
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
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