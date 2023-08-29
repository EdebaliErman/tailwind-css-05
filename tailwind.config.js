/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      bg: "#9DB2BF",
      red:"#eb6662",
      blue:"#082032",
      yellow:"#fdbb28",
      black:"#2C3333",
      text:"#EEEDED",
      toColor:"#9BE8D8",
      hovercolor:"#6c6e6d",
      yellowText:"#071952",
      redText:"#3F1D38",
      hr:"#EEEDED",
      none:"#ffffff00"
    },
    extend:{
      boxShadow:{
        '3xl':'1px 1px 6px 3px #EEEDED'
      }
    }
  },
  plugins: [],
}

