/** tailwind.config.js */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#72c044ff",
          500: "#83b665ff",
          600: "#8bb673ff"
        },
        brand: {
          DEFAULT: "#567E3E"
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          700: "#355F3B"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial"]
      },
      boxShadow: {
        'btn': '0 6px 20px rgba(2, 199, 51, 0.12)'
      }
    }
  },
  plugins: []
}