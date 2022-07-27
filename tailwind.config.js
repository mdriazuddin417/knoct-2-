module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#05BC61",
          secondary: "#09B66D",
          accent: "#1F2935",
          neutral: "#3D4451",

          base: "#EAEDF0",
          base2: "#B3C0CE",
          base3: "#8697A8",
          base4: "#EFF4F8",
          base5: "#F8F9FB",

          info: "#22CCE2",
          success: "#09B66D",

          warning: "#FDBF5E",
          warning2: "#FF8A48",
          error: "#FF3D57",
          blue: "#0081FF",

          black: "#1F2935",
          black2: "#2E3947",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
