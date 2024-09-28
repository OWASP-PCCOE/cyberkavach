import { plugin } from 'postcss';
import { add } from 'three/webgpu';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       boxShadow:{
//         neon:"0 0 5px theme('colors.purple.200'), 0 0 40px theme('colors.purple.700')",
//       }
//     },
//   },
//   plugins: [
//      function({ addUtilities}){
//       const newUtilities = {
//         ".no-scrollbar::-webkit-scrollbar":{
//           display:"none", 
//         },
//         "no-scrollbar":{
//           "-ms-overflow-style":"none",
//           "scrollbar-width":"none",
//         },
//       };
//       addUtilities(newUtilities);
//      },
//      plugin(({theme,addUtilities}) => {
//         const neonUtilities = {};
//         const colors = theme('colors');
//         for(const color in colors) {
//            if(typeof colors[color] === 'object'){
//             const color1 = colors[color]['500'];
//             const color2 = colors[color]['700'];
//             neonUtilities[`.neon-${color}`] = {
//               boxShadow:`0 0 5px ${color1}, 0 0 40px ${color2}`,
//             }
//            }
//         }
//         addUtilities(neonUtilities)
//      })
//   ],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px rgba(156, 39, 176, 0.5), 0 0 40px rgba(156, 39, 176, 1)", // Example with actual RGBA values
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
    ({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][500];
          const color2 = colors[color][700];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 40px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }
  ],
}
