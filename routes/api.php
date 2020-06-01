<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// React用api
Route::group(['middleware' => 'api'], function () {
    //アプリケーション起動時に必ずアクセスして、ログインしているかどうかをチェックする
    Route::get("/user", function () {
        return Auth::user();
    });
    //ログイン処理
    Route::post("/login", "Auth\LoginController@login");
    //ログアウト処理
    Route::post("/logout", "Auth\LoginController@logout");
    //新規登録処理
    Route::post("/register", "Auth\RegisterController@register");
    //ログインユーザーのタグとブックマークを取得
    Route::get("/info", "api\BookmarkController@info");
    //ユーザーのブックマーク一覧を取得
    Route::get("/bookmark", "BookmarkController@index");
    //タグの情報を取得
    Route::get("/tag", "api\TagController@index");
    //選択したタグに関連するブックマークを取得
    Route::get("/selectTag", "api\TagController@selectTag");
    //ブックマークの新規登録
    Route::post("/bookmark", "api\BookmarkController@create");
    //ブックマークの削除
    Route::delete('/bookmark', "api\BookmarkController@delete");
    //ブックマークの更新
    Route::put("/bookmark", "api\BookmarkController@update");
    //タグの新規登録
    Route::post("/tag", "api\TagController@create");
    //タグの更新
    Route::put("/tag", "api\TagController@update");
    //タグとそのタグに関連するブックマークの削除
    Route::delete("/tag", "api\TagController@delete");
    //共通ページでのデータ取得
    Route::get("/common", "api\CommonController@index");
    //共通ページで検索した際にその検索結果を表示する
    Route::get("/common/{word}", "api\CommonController@search");
});
