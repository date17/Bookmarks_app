<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookmark;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    //ユーザのブックマーク情報を取得
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $bookmarks = Bookmark::loginUser($request->id)->get();
            return $bookmarks;
        } else {
            return response("not id data", 200);
        }
    }

    //ブックマークの新規登録
    public function create(Request $request, Bookmark $bookmark)
    {
        return DB::transaction(function () use ($request, $bookmark) {

            $this->validate($request, Bookmark::$rules);

            $form = $request->all();

            $bookmark->fill($form)->save();

            //追加した後のユーザーの選択したタグのブックマークを取得
            $bookmarks = Bookmark::selectTag($request->tag_id)->get();

            return response($bookmarks, 200);
        });
    }

    //ブックマークの削除
    public function delete(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $bookmark = Bookmark::find($request->id);

            //ユーザが異なっていたらエラーを返す
            if ($bookmark->user_id !== $request->user_id) {
                return response("not match user_id", 400);
            }

            //ブックマークの削除
            $bookmark->delete();

            //削除後のブックマークを取得して返す
            $bookmarks = Bookmark::selectTag($request->tag_id)->get();

            return response($bookmarks, 200);
        });
    }

    public function userIndex(Request $request)
    {
        $bookmarks = Bookmark::with("tag:id,name")->loginUser($request->user_id)->get();
    }
}
