<?php

use Illuminate\Http\Request;

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
    Route::middleware("auth:api")->post("/login", "Auth\LoginController@login");
    Route::middleware("auth:api")->post("/register", "Auth\RegisterController@register");
    Route::middleware("auth:api")->get("/bookmark", "api\BookmarkController@userIndex");
    Route::middleware("auth:api")->post("/bookmark", "api\BookmarkController@create");
    Route::middleware("auth:api")->delete('/bookmark', "api\BookmarkController@delete");
    Route::middleware("auth:api")->get("/tag", "api\TagController@index");
    Route::middleware("auth:api")->post("/tag", "api\TagController@create");
    Route::middleware("auth:api")->delete("/tag", "api\TagController@delete");
});
