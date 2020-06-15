<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//model
use App\Bookmark;
use App\Tag;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    //ユーザーのidを用いて、ユーザーのタグ情報を取得する
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $tags = Tag::userTags($request->id)->orderBy("created_at", "asc")->get();
            return $tags;
        } else {
            return response("not id data", 422);
        }
    }

    //タグの新規作成
    public function create(Request $request, Tag $tag)
    {
        return DB::transaction(function () use ($request, $tag) {
            //バリデーション
            $this->validate($request, Tag::$rules);

            //値を作成
            $form = $request->all();

            //CSRFトークンの存在を確認
            if (isset($form["_token"])) {
                unset($form["_token"]);
            }

            //値をセットし、新規作成
            $tag->fill($form)->save();

            //ユーザのタグ情報を取得して返す
            $tags = Tag::userTags($request->user_id)->orderBy("created_at", "asc")->get();

            return response($tags, 200);
        });
    }

    //タグを選択してそのブックマークを返す
    public function selectTag(Request $request)
    {
        if (!$request->tag_id || !$request->user_id) {
            return response("not tag_id or user_id", 400);
        }

        $data = Tag::with("bookmark")->find($request->tag_id);

        return response($data, 200);
    }

    //タグの編集
    public function update(Request $request)
    {
        if (Auth::user()->id ===  $request->user_id) {
            return DB::transaction(function () use ($request) {
                //バリデーション
                $this->validate($request, Tag::$rules);

                //tagインスタンスの取得
                $tag = Tag::find($request->id);

                $form = $request->all();

                //CSRFトークンの存在を確認
                if (isset($form["_token"])) {
                    unset($form["_token"]);
                }

                //タグの更新
                $tag->fill($form)->save();

                //ユーザのタグの一覧を取得し返す
                $tags = Tag::userTags($request->user_id)->orderBy("created_at", "asc")->get();

                return response($tags, 200);
            });
        } else {
            return response("not match user_id", 500);
        }
    }

    //タグの削除
    public function delete(Request $request)
    {
        return DB::transaction(function () use ($request) {
            //　タグを取得する
            $tag = Tag::find($request->id);

            //タグのuse_idとリクエストのuse_idが一致するかどうかを確認
            if ($tag->user_id !== $request->user_id) {
                return response("not match user_id", 400);
            }

            //タグに関連するブックマーク情報を取得し削除
            $bookmarks = Bookmark::selectTag($tag->id)->delete();

            //タグの削除
            $tag->delete();

            //削除後のブックマーク情報とタグ情報を取得し連想配列にして返す
            $userData = [
                "bookmarks" => Bookmark::loginUser($request->user_id)->get(),
                "tags" => Tag::userTags($request->user_id)->get()
            ];

            return response($userData, 200);
        });
    }
}
