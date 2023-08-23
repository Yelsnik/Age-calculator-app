/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Nunito"],
        poppinsBold: [
          "./age-calculator-app-main/assets/fonts/Poppins-Bold.ttf",
        ],
        poppinsBolditalic: [
          "./age-calculator-app-main/assets/fonts/Poppins-BoldItalic.ttf",
        ],
        poppinsExtrabold: [
          "./age-calculator-app-main/assets/fonts/Poppins-ExtraBold.ttf",
        ],
        poppinsExtrabold: [
          "./age-calculator-app-main/assets/fonts/Poppins-ExtraBoldItalic.ttf",
        ],
        poppinsItalic: [
          "./age-calculator-app-main/assets/fonts/Poppins-Italic.ttf",
        ],
        poppinsRegular: [
          "./age-calculator-app-main/assets/fonts/Poppins-Regular.ttf",
        ],
      },
    },
  },
  plugins: [],
};
