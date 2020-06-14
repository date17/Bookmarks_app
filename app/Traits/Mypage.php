<?php

namespace App\Traits;

use App\Bookmark;
use App\Tag;

trait Mypage
{
    public function userInfo($user_id)
    {
        $bookmarks = Bookmark::loginUser($user_id)->orderBy("created_at", "asc")->get();
        $tags = Tag::userTags($user_id)->orderBy("created_at", "asc")->get();

        return ["bookmarks" => $bookmarks, "tags" => $tags];
    }
}
