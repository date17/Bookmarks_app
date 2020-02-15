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

mix.sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/bookmarks.scss", "public/css/bookmarks")
    .sass("resources/sass/mypage.scss", "public/css/bookmarks")
    .sass("resources/sass/editBookmark.scss", "public/css/bookmarks")
    .sass("resources/sass/addBookmark.scss", "public/css/bookmarks")
    .sass("resources/sass/addTag.scss", "public/css/bookmarks")
    .sass("resources/sass/login.scss", "public/css/user")
    .js("resources/js/addTagForm.js", "public/js")
    .js("resources/js/selectOrCreateTag.js", "public/js")
    .js("resources/js/layout.js", "public/js")
    .js("resources/js/mypage.js", "public/js");
