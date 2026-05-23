// tailwind.config.js 전체 교체
export default {
  darkMode: "class",   // ← 이 줄이 핵심
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 2px 16px 0 rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};