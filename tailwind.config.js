export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",
        card: "#111a2e",
        accent: "#80bda8",
        muted: "#94a3b8",
      },

      // 👇 ADD THIS PART
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};