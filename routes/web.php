<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//ユーザーのホーム画面
Route::get('/mypage', 'TagController@indexUser');
Route::post('/tagAdd', 'TagController@create');
Route::get('/mypage/{selectTag}', 'BookmarkController@showTagBookmarks');
Route::get('/addbookmark', 'BookmarkController@add');
Route::post('/addBookmark', 'BookmarkController@create');

//Reactを使ったSPAとなるため、全ルートをひとつにする
// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');
