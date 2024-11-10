// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all files for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "sans-serif"], // Sets JetBrains Mono as a sans-serif option
        mono: ["JetBrains Mono", "monospace"], // Sets JetBrains Mono as a monospace option
      },
    },
  },
  plugins: [],
};
