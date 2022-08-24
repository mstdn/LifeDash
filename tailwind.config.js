const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    // daisyUI config (optional)
    daisyui: {
        styled: true,
        /* themes: true, */
        themes: [
            {
                light: {
                    primary: "#dc2626",
                    secondary: "#f3f4f6",
                    accent: "#b91c1c",
                    neutral: "#ef4444",
                    "base-100": "#ffffff",
                    info: "#3D72F0",
                    success: "#84cc16",
                    warning: "#eab308",
                    error: "#ef4444",
                },
                dark: {
                    primary: "#dc2626",
                    secondary: "#f3f4f6",
                    accent: "#b91c1c",
                    neutral: "#ef4444",
                    "base-100": "#191919",
                    info: "#3D72F0",
                    success: "#84cc16",
                    warning: "#eab308",
                    error: "#ef4444",
                },
            },
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
};
