<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tag;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    //ユーザーのidを用いて、ユーザーのタグ情報を取得する
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $tags = Tag::userTags($request->id)->get();
            return $tags;
        } else {
            return response("not id data", 200);
        }
    }

    public function create(Request $request, Tag $tag)
    {
        return DB::transaction(function () use ($request, $tag) {
            //バリデーション
            $this->validate($request, Tag::$rules);

            //値を作成
            $form = $request->all();

            //値をセットし、新規作成
            $tag->fill($form)->save();

            //ユーザのタグ情報を取得して返す
            $tags = Tag::userTags($request->user_id)->get();

            return response($tags, 200);
        });
    }
}
