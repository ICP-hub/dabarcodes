/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 12px 0px rgba(104, 88, 46, 0.2)",
      },
      screens: {
        xs: { max: "378px" },
        suf: { min: "556px", max: "767px" },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".ribbon-2": {
          "--f": "10px" /* Control the folded part */,
          "--r": "1px" /* Control the ribbon shape */,
          "--t": "120px" /* The top offset */,
          position: "absolute",
          inset: "var(--t) calc(-1 * var(--f)) auto auto",
          padding: `0 10px var(--f) calc(10px + var(--r))`,
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - var(--f)), calc(100% - var(--f)) 100%, calc(100% - var(--f)) calc(100% - var(--f)), 0 calc(100% - var(--f)), var(--r) calc(50% - var(--f) / 2))",
          backgroundColor: "#b72322",
          boxShadow: "0 calc(-1 * var(--f)) 0 inset #0005",
        },
      });
    },
  ],
};
