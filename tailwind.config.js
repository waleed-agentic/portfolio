/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        text: "var(--text)",
        muted: "var(--muted)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 107, 74, 0.18), 0 24px 70px rgba(255, 107, 74, 0.16)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(255, 107, 74, 0.18), transparent 34%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08), transparent 20%)"
      }
    }
  },
  plugins: []
};