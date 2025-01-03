/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            lineHeight: {
                "extra-tight": "1.05",
            },
            spacing: {
                13: "3.35rem", // Define your custom size, e.g., 3.25rem (52px)
                30: "7.5rem",
            },
            padding: {
                0.5: "0.5rem",
            },
            fontSize: {
                "2xs": "0.6rem",
            },
            borderWidth: {
                3: "3px",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
