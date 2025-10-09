/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // For Vite projects
    "./src/**/*.{js,jsx,ts,tsx}", // All React component files
    "./public/index.html"         // ✅ Add this if you have a public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
