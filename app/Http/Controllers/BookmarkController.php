<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Bookmark; //Bookmarkモデルクラスを使用
use Illuminate\Support\Facades\Auth;
use App\Tag;

class BookmarkController extends Controller
{
    //全データを表示
    public function index(Request $request)
    {
        $bookmarks = Bookmark::all();

        return $bookmarks;
    }

    //ログインしているユーザーのブックマークをタグごとに表示
    public function showTagBookmarks(Request $request)
    {
        //ログインしているユーザの情報を取得
        $user = Auth::user();

        //２つのスコープを使ってログインしているユーザの指定したタグに紐づいているbookmarkを取得
        $bookmarks = Bookmark::loginUser($uer->id)->selectTag($request->selectTag)->get();

        return view('bookmark.selectTag', [
            'bookmarks' => $bookmarks
        ]);
    }

    //ブックマークの新規登録フォームへ
    public function add(Request $request)
    {
        //ログインしているユーザを取得
        $user = Auth::user();

        //ログインしているユーザーが保存したタグを取得
        $tags = Tag::userTags($user->id)->get();

        return view('bookmark.addBookmark', [
            'user' => $user,
            'tags' => $tags
        ]);
    }

    //ブックマークの新規登録
    public function create(Request $request)
    {
        //ログインしているユーザを取得
        $user = Auth::user();
        //タグが入力であるかどうかを調べる
        if ($request->tag_check === 'none') {
            //タグが何も指定されていない時
            $tag_id = null;
        } elseif ($request->tag_check === 'select' && !is_null($request->tag_id)) {
            //タグを選択した場合
            $tag_id = $request->tag_id;
        } elseif ($request->tag_check === 'create' && !is_null($request->tag_name)) {
            //タグを新しく作成してそれを利用する場合
            //新しいタグの作成
            $tag = new Tag();
            $param = [
                'name' => $request->tag_name,
                'user_id' => $user->id
            ];
            $tag->fill($param)->save();
        }
    }
}
