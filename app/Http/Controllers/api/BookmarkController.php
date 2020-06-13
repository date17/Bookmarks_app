<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookmark;
use App\Http\Requests\BookmarkRequest;
use Illuminate\Support\Facades\DB;
use App\Traits\Mypage;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{

    use Mypage;

    public function __construct()
    {
        //ログインしているか確認
        $this->middleware("auth");
    }

    //ログインユーザのタグとブックマークを取得
    public function info()
    {
        $user = Auth::user();

        return $this->userInfo($user->id);
    }

    //ユーザのブックマーク情報を取得
    public function index(Request $request)
    {
        if (isset($request->user_id)) {
            $bookmarks = Bookmark::loginUser($request->user_id)->orderBy("created_at", "asc")->get();
            return response($bookmarks, 200);
        } else {
            return response("not id data", 200);
        }
    }

    //ブックマークの新規登録
    public function create(BookmarkRequest $request, Bookmark $bookmark)
    {
        return DB::transaction(function () use ($request, $bookmark) {

            $form = $request->all();

            $bookmark->fill($form)->save();

            //追加した後のユーザーの選択したタグのブックマークを取得
            // $bookmarks = Bookmark::selectTag($request->tag_id)->orderBy("created_at", "asc")->get();

            return response("success create bookmark", 200);
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

            return response("success bookmark delete", 200);
        });
    }

    //ブックマークの編集
    public function update(BookmarkRequest $request)
    {
        return DB::transaction(function () use ($request) {
            //編集するブックマークの取得
            $bookmark = Bookmark::find($request->id);

            //更新するデータの用意
            $form = $request->all();

            //CSRFトークンがあるかの確認
            if (isset($form["_token"])) {
                unset($form["_token"]);
            }

            //値をセットして、更新
            $bookmark->fill($form)->save();

            //選択しているタグのブックマークを取得する
            $bookmark = Bookmark::find($request->id);

            //ブックマークを返す
            return response($bookmark, 200);
        });
    }

    public function userIndex(Request $request)
    {
        $bookmarks = Bookmark::with("tag:id,name")->loginUser($request->user_id)->get();
    }

    public function selectTag(Request $request)
    {
        if (!$request->tag_id && !$request->user_id) {
            return response("not tag_id or user_id", 400);
        } else if (!$request->tag_id) {
            $bookmarks = Bookmark::loginUser($request->user_id)->get();
        } else {
            $bookmarks = Bookmark::loginUser($request->user_id)->selectTag($request->tag_id)->get();
        }

        return response($bookmarks, 200);
    }
}
