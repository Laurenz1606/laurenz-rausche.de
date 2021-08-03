module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#007EE5",
        white: "#FFFFFF",
        "gray-light": "#DFE2EB",
        gray: "#7B8994",
        "gray-dark": "#3D464D",
        black: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
