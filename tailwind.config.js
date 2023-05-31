/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "screen-3/10": "30vh",
        "screen-1/2": "50vh",
        "screen-7/10": "70vh",
      },
      maxHeight: {
        sm: "40rem",
        md: "48rem",
        lg: "56rem",
        xl: "64rem",
        "2xl": "72rem",
        "3xl": "80rem",
        "4xl": "90rem",
        "5xl": "100rem",
        "6xl": "120rem",
        "7xl": "140rem",
        "8xl": "160rem",
        "9xl": "180rem",
        "10xl": "200rem",
        "11xl": "220rem",
        "12xl": "240rem",
      },
    },
  },
  plugins: [],
};
