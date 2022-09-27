/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                about: "url('../public/img/grap.svg')",
                profile: "url('../public/img/me.PNG')",
            },
            boxShadow: {
                card1: "20px 20px rgba(0,0,0,.25)",
                card2: "10px 10px rgba(0,0,0,.55)",
            },
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            variants: {
                animation: ["motion-safe"],
            },
        },
        colors: {
            sec: "#022B3A",
            main: "#EFECCA",
            orangetheme: "#D36135",
            darkMain: "#679289",
            red: "#b33232",
        },

        fontFamily: {
            merri: ["Roboto", "sans-bold"],
            jost: ["jost"],
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#EFECCA",

                    secondary: "#D926A9",

                    orange: "#D36135",

                    neutral: "#191D24",

                    "base-100": "#2A303C",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
