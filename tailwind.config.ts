import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', ...fontFamily.sans], // Use Gilroy as the default sans-serif font
        gilroy: ['Gilroy', 'sans-serif'], // Add a custom Gilroy font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        '8xl': '4rem',
      },
      keyframes: {
        move: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        typing: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        
      },
      animation: {
        move: 'move 80s linear infinite', // Adjust timing and easing as needed
        typing: "typing 0.5s ease forwards",
      },
    
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-bg-patterns'),
  ],
  
  daisyui: {
    themes: ["light"],
  },
  
  
} satisfies Config;
