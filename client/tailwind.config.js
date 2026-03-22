/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#020617",
        surface: "#0f172a",
        accent: "#7c3aed",
        cyanGlow: "#38bdf8",
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 58, 237, 0.28)",
        card: "0 20px 60px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(124,58,237,0.22), transparent 30%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.18), transparent 22%), linear-gradient(180deg, rgba(2,6,23,0.94), rgba(2,6,23,1))",
      },
    },
  },
  plugins: [],
};

