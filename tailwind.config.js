// tailwind.config.js
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#003287",
      secondary: "#f90302",
      background: "#fff6f4",
      "default-text": "#ffffff",
      "secondary-text": "#000000",
    },
    padding: {
      lg: "0.5rem 1rem",
      sm: "0.25rem 0.5rem",
    },
  },
};
export const plugins = [];
