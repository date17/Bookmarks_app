<?php

namespace app\Http\Traits\User;

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
        $bookmarks = Bookmark::loginUser($user->id)->get();
        //ログインしているユーザのタグを取得
        $tags = Tag::userTags($user->id)->get();

        //上記情報をひとまとまりにする
        $userData = [
            "user" => $user,
            "bookmarks" => $bookmarks,
            "tags" => $tags
        ];

        return $userData;
    }
}
