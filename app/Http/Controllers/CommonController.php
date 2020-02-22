<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bookmark;

class CommonController extends Controller
{
    function __construct()
    {
        //ログインしていなかったらログインページに飛ぶ
        $this->middleware('auth');
    }
    //全ユーザーのブックマークをかえす(このメソッドのみ実装)
    function __invoke()
    {
        //一度に表示する数は5にする
        $bookmarks = Bookmark::paginate(5);

        return view("common.Site", [
            "bookmarks" => $bookmarks
        ]);
    }
}
