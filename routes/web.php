<?php

use App\Bookmark;
use App\Tag;
use Illuminate\Support\Facades\Auth;

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
    return view("LP.lp");
});


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
Route::post('/mypage/bookmark/edit/{id}', 'BookmarkController@update')->middleware("booleanCheck");
//ブックマークの削除
Route::get('/mypage/bookmark/delete/{id}', 'BookmarkController@delete');
//ログインしているユーザのブックマーク一覧
Route::get('/mypage/bookmarks', 'bookmarkController@showBookmarks');
//全ユーザの共通サイト
Route::get('/common', "CommonController")->name("common");
//ユーザーの情報
Route::get('/mypage/user/detail', function () {
    // $count_bookmarks = Bookmark::loginUser(Auth::user()->id);
    // $count_tags = Tag::userTags(Auth::user()->id);
    return view("user.detail");
})->middleware('auth');

//お問い合わせフォームの表示
Route::get("/contact", "ContactController@index")->name("contact.index");
//お問い合わせフォームの入力を確認する
Route::post("/contact/confirm", "ContactController@confirm")->name("contact.confirm");
//送信
Route::post("/contact/send", "ContactController@send")->name("contact.send");

Auth::routes();

//Reactを使ったSPAとなるため、全ルートをひとつにする
// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');
