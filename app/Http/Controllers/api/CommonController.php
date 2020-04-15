<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookmark;

class CommonController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index(Request $request)
    {
        //ペジネーションのように何ページ目か
        $page = $request->page || 0;

        //一ページあたりの表示レコード数
        // $count = $request->count || 10;

        //bookmarkのisOpenがtrueになっている物だけを取得する。かつ、10レコードずつ取得する
        $bookmarks = Bookmark::open()
            ->offset(10 * $page)
            ->limit(10)
            ->get();

        return response($bookmarks, 200);
    }
}
