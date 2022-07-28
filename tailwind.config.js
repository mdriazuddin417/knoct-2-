module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#05BC61",
          secondary: "#09B66D",

          accent: "#2E3947",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#22CCE2",
          success: "#09B66D",

          warning: "#FDBF5E",

          error: "#FF3D57",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
