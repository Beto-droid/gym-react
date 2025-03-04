/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // This is for wailwind config
  ],
  theme: {
    extend: {
        // THis is like a global tailwind css colors. stick to 3 or 5 colors and shades of that color.
        colors: {
            "gray-20": "#F8F4EB",
            "gray-50": "#EFE6E6",
            "gray-100": "#DFCCCC",
            "gray-500": "#5E0000",
            "primary-100": "#FFE1E0",
            "primary-300": "#FFA6A3",
            "primary-500": "#FF6B66",
            "secondary-400": "#FFCD5B",
            "secondary-500": "#FFC132",
        },
        // background we can set the backgorund css here, we added gradient if
        // we use that liek a befor or after css seelector, this how we do it in trailwind
        // GRADIENTS FOR AFTER AND BEFORE
        backgroundImage: (theme) => ({
            "gradient-yellowred":
                "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
            "mobile-home": "url('./assets/HomePageGraphic.png')",  // this is a backgorund media.
        }),
        fontFamily: {
            dmsans: ["DM Sans", "sans-serif"],  // google font
            montserrat: ["Montserrat", "sans-serif"],  // BOld header fornt
        },
        // Similart to backgorund image, but this is can be like before and after selector to put imagess.
        content: {
            evolvetext: "url('./assets/EvolveText.png')",
            abstractwaves: "url('./assets/AbstractWaves.png')",
            sparkles: "url('./assets/Sparkles.png')",
            circles: "url('./assets/Circles.png')",
        },
        // Common screens ?
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
  },
  plugins: [],
}

