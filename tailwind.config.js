/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
 
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: {
        40: "#EADB7F28",
        60: "#EADB7F3c",
        80: "#EADB7F50",
        100: "#EADB7F",
      },
      secondary: {
        100: "#FF5306",
      },
      pinkPrimary : '#E44C95',
      redPrimary:'#FF0000',
      footerBlue:'#252B48',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      orange: "#0000",
      gray: {
        50: "#FAFAFC",
        100: "#E9E9EC",
        200: "#C6C8CD",
        300: "#ACAEB6",
        400: "#92959F",
        500: "#777C87",
        600: "#5D6370",
        700: "#434959",
        800: "#293041",
        900: "#0f172a",
      },
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
  },
  plugins: [],
}

