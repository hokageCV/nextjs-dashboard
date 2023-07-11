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
            },
        },
    },
    plugins: [],
};
