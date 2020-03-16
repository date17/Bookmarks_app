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
    Route::get("/bookmark", "api\BookmarkController@index");
    Route::post("/bookmark", "api\BookmarkController@create");
    Route::delete('/bookmark', "api\BookmarkController@delete");
    Route::get("/tag", "api\TagController@index");
    Route::post("/tag", "api\TagController@create");
});
