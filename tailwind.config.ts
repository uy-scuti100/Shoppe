import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            DarkGray: "rgb(158, 158, 158)",
            Accent: "rgb(161, 138, 104)",
            white: "rgb(255, 255, 255)",
            LightGray: "rgb(239, 239, 239)",
            Gray: "rgb(216, 216, 216)",
            Error: "rgb(216, 39, 0)",
            Black: "rgb(0, 0, 0)",
         },
      },
      keyframes: {
         shake: {
            "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
            "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
            "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
            "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
         },
      },
      animation: {
         shake: "shake 1s ease-in-out",
      },
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }
      },
   },
   plugins: [],
};
export default config;

// colors

// Light Colors/Accent - Light #A18A68 rgb(161, 138, 104)
// White rgb(255, 255, 255) #FFFFFF
// Black rgb(0,0, 0) #000000
// Dark Gray rgb(158, 158, 158) #707070
// Gray rgb(216, 216, 216) #D8D8D8
// Light Gray rgb(239, 239, 239) #EFEFEF
// Errors rgb(216, 39, 0) #D82700
