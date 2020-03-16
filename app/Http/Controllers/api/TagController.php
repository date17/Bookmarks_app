<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tag;

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
}
