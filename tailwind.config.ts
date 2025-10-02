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
        sans: ["Gilroy", ...fontFamily.sans],
        gilroy: ["Gilroy", "sans-serif"],
        malayalam: ['"Noto Serif Malayalam"', 'serif'],
      },
      
      keyframes: {
		typing: {
			'0%': { width: '0' },
			'100%': { width: '100%' },
		  },
        hyperText: {
          "0%, 100%": { transform: "scaleX(0)", opacity: "0" },
          "50%": { transform: "scaleX(1)", opacity: "1" },
        },
        pulseColor: {
			"0%, 100%": { color: "##d70000" }, // Red (Hex)
			"50%": { color: "#000000" },
        },
        move: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        moveRightToLeft: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        
        vibrate: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
          "100%": { transform: "translate(1px, 1px)" },
        },
      },
      animation: {
        underline: "hyperText 2s ease-in-out infinite",
        colorPulse: "pulseColor 3s ease-in-out infinite",
        move: "move 50s linear infinite",
        rightToLeft: "moveRightToLeft 50s linear infinite",
        vibrate: "vibrate 2s infinite",
		typing: 'typing 3s steps(40) 1s forwards',      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],

 
} satisfies Config;
