<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Bookmark;
use App\Tag;
use DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware("auth");
    }

    //削除するアクションのみ
    public function __invoke(Request $request)
    {
        //削除するユーザに関わるレコードを全て削除そのためトランザクション処理をする
        return  DB::transaction(function () use ($request) {
            $user_id = Auth::user()->id;
            //ブックマークを取得する
            $bookmarks = Bookmark::loginUser($user_id);
            //タグを取得
            $tags = Tag::userTags($user_id);
            //ブックマークを削除する
            $bookmarks->delete();
            //タグを削除する
            $tags->delete();
            //最後にユーザを削除する
            User::destroy($user_id);

            //全てを削除後、LPにリダイレクト
            return redirect('/');
        });
    }
}
