/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,php,js}", // root file
        "./**/*.{html,php}", // sub folder if root not working
        // "../**/*.{php,html,js}", // Enable for wordpress sub folder. All current folder and sub folders
        // "./inc/**/*.php", // selected path folder
        //"./assets/**/*.js",  // other folder
        //"./resources/views/**/*.blade.php", // laravel  path
        //"./resources/js/vue/**/*.vue", // vue path
        //  "!./node_modules/**/*", // Explicitly exclude all files in node_modules
    ],


    theme: {
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1430px',
        },
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                primaryDark: 'var(--primary-dark-color)',
                primaryLight: 'var(--primary-light-color)',
                secondary: 'var(--secondary-color)',
                secondaryDark: 'var(--secondary-dark-color)',
                accent: 'var(--accent-color)',
                black: 'var(--black-color)',
                white: 'var(--white-color)',
                blue: 'var(--blue-color)',
                pink: 'var(--pink-color)',
            },
            fontFamily: {
                vorwerk: ['vorwerk', 'sans-serif'],
                /*you can add multiple font*/
                // 'source-sans': ['"Source Sans 3"', 'sans-serif'],
                // rokkitt: ['Rokkitt', 'monospace'],
                // opensans: ['"Open Sans"', 'sans-serif'],
            },

            spacing: {
                25: '25px',
                50: '50px',
                75: '75px',
                100: '100px',
                150: '150px',
                200: '200px',
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: false,
        darkTheme: false,
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
}

