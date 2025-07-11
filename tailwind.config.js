/** @type {import('tailwindcss').Config} */
module.exports={
    content: [
        "./src/App.{js,jsx,ts,tsx}",
        "./src/app/**/*.{js,jsx,ts,tsx}",        // Expo Router pages
        "./src/components/**/*.{js,jsx,ts,tsx}", // Shared components
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};
