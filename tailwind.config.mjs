/** tailwind.config.js */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0ea5a4"
        },
        brand: {
          DEFAULT: "#0b9aa6"
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          700: "#334155"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial"]
      },
      boxShadow: {
        'btn': '0 6px 20px rgba(2,132,199,0.12)'
      }
    }
  },
  plugins: []
}