/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*. {js, ts, jsx, tsx, mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",],
        theme: {
            extend: {
                maxWidth: {
                    container: "1440px",
                    contentContainer: "1140px",
                    containerSmall: "1024px",
                    containerXs: "768px",
                },
                screens: {
                    xs: "320px",
                    sm: "375px",
                    sml: "500px",
                    md: "667px",
                    mdl: "768px",
                    lg: "960px",
                    lgl: "1024px",
                    xl: "1280px",
                },
                fontFamily: {
                    bodyFont: ["Montserrat", "sans-serif"],
                    titleFont: ["Inter", "sans-serif"],
                },
                boxShadow:{
                    shadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
                },
                colors: {
                    bodyColor: "#0A192F",
                    fontColor: "#CCD6F6",
                    hoverColor: "rgba(100,255,218,0.1)",
                    palmGreen: "#2C7865",
                    grey: "#222831",
                    brown: "#C6A969"
                },
            },
        },
}