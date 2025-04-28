import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class', // IMPORTANTE!
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
