// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gaming': 'url(\'https://i.pinimg.com/736x/78/ce/89/78ce89d511c87c48d3f4d308617d2d90.jpg\')',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.5)',
      },
      boxShadow: {
        'glass': '0 0 20px 5px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
