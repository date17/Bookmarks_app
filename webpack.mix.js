const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/header.scss", "public/css/react")
    .sass("resources/sass/main.scss", "public/css/react")
    .sass("resources/sass/lp.scss", "public/css/react")
    .sass("resources/sass/login.scss", "public/css/react")
    .sass("resources/sass/register.scss", "public/css/react")
    .sass("resources/sass/common.scss", "public/css/react");
