<?php

namespace App\Http\Traits\User;

use Illuminate\Support\Facades\Auth;
use App\Bookmark;
use App\Tag;

trait UserTrait
{
    public function loginUserData()
    {
        //ログインしているユーザの情報を取得
        $user = Auth::user();
        //ログインしているユーザのブックマークを取得
        $bookmarks = Bookmark::with("tag:id,name")->loginUser($user->id)->get();
        //ログインしているユーザのタグを取得
        $tags = Tag::with("bookmark")->userTags($user->id)->get();

        //上記情報をひとまとまりにする
        $userData = [
            "user" => $user,
            "bookmarks" => $bookmarks,
            "tags" => $tags,
            "select" => [
                "name" => "ブックマーク一覧",
                "bookmark" => $bookmarks
            ]
        ];

        return $userData;
    }

    //ログインしているユーザとリクエストで送られてきたユーザのidが等しいかどうかを確認
    public function checkUser($loginUserId, $requestId)
    {
        if ($loginUserId === $requestId) {
            return true;
        } else {
            return false;
        }
    }
}
