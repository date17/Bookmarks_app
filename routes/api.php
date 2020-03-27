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
    //タグの情報を取得
    Route::get("/tag", "api\TagController@index");
    //選択したタグに関連するブックマークを取得
    Route::get("/selectTag", "api\TagController@selectTag");
    //ブックマークの新規登録
    Route::post("/bookmark", "api\BookmarkController@create");
    // Route::get("/bookmark", "api\BookmarkController@userIndex");
    // Route::delete('/bookmark', "api\BookmarkController@delete");
    // Route::get("/tag", "api\TagController@index");
    // Route::post("/tag", "api\TagController@create");
    // Route::delete("/tag", "api\TagController@delete");
});
