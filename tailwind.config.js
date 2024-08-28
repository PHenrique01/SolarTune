/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          c12: "#000000",
          c11: "#111111",
          c10: "#1F1F1F",
          c9: "#404040",
          c8: "#595959",
          c7: "#707070",
          c6: "#9C9C9C",
          c5: "#B3B3B3",
          c4: "#CCCCCC",
          c3: "#DEDEDE",
          c2: "#EDEDED",
          c1: "#EFEFEF",
          p: "#40E0D0",
        },
        backgroundImage: {
          "phone": "url('../../images/bg-img.png')",
          "gradient": "linear-gradient(to bottom, #000000 40%, #111111 100%)",
        }
      },
    },
    plugins: [],
  }