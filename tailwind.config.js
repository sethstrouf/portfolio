const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
