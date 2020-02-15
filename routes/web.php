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
Route::get('/mypage', 'BookmarkController@mypage');
//タグの追加
Route::get('/mypage/tag/add', 'TagController@add');
Route::post('/mypage/tag/add', 'TagController@create');
//タグの削除
Route::get('/mypage/tag/delete/{id}', 'TagController@delete');
//選択したタグのブックマーク一覧
Route::get('/mypage/tag/select/{selectTag}', 'BookmarkController@showTagBookmarks');
//ブックマークの追加
Route::get('/mypage/bookmark/add', 'BookmarkController@add');
Route::post('/mypage/bookmark/add', 'BookmarkController@create');
//ブックマークの編集
Route::get('/mypage/bookmark/edit/{id}', 'BookmarkController@edit');
Route::post('/mypage/bookmark/edit/{id}', 'BookmarkController@update');
//ブックマークの削除
Route::get('/mypage/bookmark/delete/{id}', 'BookmarkController@delete');
//ログインしているユーザのブックマーク一覧
Route::get('/mypage/bookmarks', 'bookmarkController@showBookmarks');

//Reactを使ったSPAとなるため、全ルートをひとつにする
// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');
