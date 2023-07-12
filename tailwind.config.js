/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: {
                    1: "#ffffff",
                    2: "#f5f5f5",
                    3: "#eaeaea",
                },
                gray: {
                    1: "#666666",
                    2: "#858585",
                    3: "#999999",
                    4: "#b0b0b0",
                },
                link: "#346bd4",
                boxGreen: "#DDEFE0",
                boxSkin: "#F4ECDD",
                boxPink: "#EFDADA",
                boxBlue: "#DEE0EF",
            },
            spacing: {
                3.6: "15px",
                6.4: "25.18px",
                7.5: "30px",
                45: "180px",
                97: "385px",
                98: "390px",
            },
            borderRadius: {
                10: "10px",
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
                sans: ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
