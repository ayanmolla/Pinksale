// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "dim"], // Enable dark mode using the class strategy
  content: [
    "./index.html", // required for Tailwind classes in HTML
    "./src/**/*.{js,ts,jsx,tsx}", // includes all your React components and logic
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "#0787d0",
        "text-color-dark": "#73b5e4",
        "text-color-dim": "#096DA3 ",
        "dispute-color": "#000000",
        "dispute-color-dark": "#ffffff",
        "dispute-color-dim": "#ffffff",
        card: "#ffffff",
        "card-dark": "#111111",
        "card-dim": "#111A2E",
        "sub-card": "#f8f9fa",
        "sub-card-dark": "#151515",
        "sub-card-dim": "#162138",
        "custom-border": "#e9ecef",
        "custom-border-dark": "#202020",
        "custom-border-dim": "#243040",
        "pre-bg": "#fbfcfd",
        "pre-bg-dark": "#151515",
        "pre-bg-dim": "#151F35",
      },
    },
  },
  plugins: [],
};
