module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Euclid: ["Euclid", "sans-serif"],
      },
      colors: {
        orange: {
          100: "#fef4ee",
        },
        blue: {
          100: "#E9EBF9",
          600: "#4F46E5",
          800: " #16163c",
          900: "#3B47A3",
        },
        yellow: {
          100: "#FFFBF0",
          800: "#F3EB2F",
        },
      },
      colors: {
        twitter: {
          100: "#55ACEE",
        },
        discord: {
          100: "#5865F2",
        },
      },
    },
    fontFamily: {
      sans: ["Euclid"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B47A3",
          secondary: "#1F2937",
        },
      },
      // "dark",
    ],
  },
};
