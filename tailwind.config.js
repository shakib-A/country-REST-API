/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "DarkBlue(DarkModeElements)": "hsl(209, 23%, 22%)",
      "VeryDarkBlue(DarkModeBackground)": "hsl(207, 26%, 17%)",
      "VeryDarkBlue(LightModeText)": "hsl(200, 15%, 8%)",
      "DarkGray(LightModeInput)": "hsl(0, 0%, 52%)",
      "VeryLightGray(LightModeBackground)": "hsl(0, 0%, 98%)",
      "White(DarkModeText&LightModeElements)": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

