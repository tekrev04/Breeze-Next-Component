/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//       screens: {
//           sm: "480px",
//           md: "768px",
//           lg: "976px",
//           xl: "1440px",
//       },
//       colors: {
//           primary: "#5873CF",
//           "primary-dark": "#4564CA",
//           "primary-light": "#B5C1EA",

//           secondary: "#515151",

//           success: "#50AF47",
//           "success-dark": "#447F40",
//           "success-light": "#81BE6E",

//           info: "#79BDAB",
//           "info-dark": "#6CA898",
//           "info-light": "#AFD7CD",

//           warning: "#FFEE11",
//           "warning-dark": "#E7D728",
//           "warning-light": "#FEF28B",

//           danger: "#FF5500",
//           "danger-dark": "#C14F27",
//           "danger-light": "#F3723A",

//           dark: "#000000",
//           "dark-900": "#515151",
//           "dark-800": "#7C7C7C",
//           "dark-700": "#A8A8A8",
//           "dark-600": "#D3D3D3",
//           "dark-500": "#EAEAEA",
//           "dark-400": "#F5F5F5",

//           light: "#FFFFFF",
//       },

//       extend: {
//           spacing: {
//               128: "32rem",
//               144: "36rem",
//           },
//           borderRadius: {
//               "4xl": "2rem",
//           },
//       },
//   },
//   plugins: [],
// };