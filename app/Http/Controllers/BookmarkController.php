<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Bookmark; //Bookmarkモデルクラスを使用
use Illuminate\Support\Facades\Auth;
use App\Tag;

class BookmarkController extends Controller
{
    public function __construct()
    {
        //全ページでログインしていなかったらlogin画面に遷移
        $this->middleware('auth');
    }

    //全データを表示
    public function index(Request $request)
    {
        $bookmarks = Bookmark::all();

        return $bookmarks;
    }

    //mypage(bookmarkとtagを全件返す)
    public function mypage(Request $request)
    {
        //ログインしているユーザーを取得
        $user = Auth::user();

        $bookmarks = Bookmark::loginUser($user->id)->get();

        $tags = Tag::userTags($user->id)->get();

        return view('bookmark.mypage', [
            "bookmarks" => $bookmarks,
            "tags" => $tags
        ]);
    }
    //ログインしているユーザーのブックマークをタグごとに表示
    public function showTagBookmarks(Request $request)
    {
        //ログインしているユーザの情報を取得
        $user = Auth::user();

        //リクエストで受け取ったタグIDを用いてタグのレコードを取得
        $tag = Tag::find($request->selectTag);

        //２つのスコープを使ってログインしているユーザの指定したタグに紐づいているbookmarkを取得
        $bookmarks = Bookmark::loginUser($user->id)->selectTag($request->selectTag)->get();

        return view('bookmark.selectTag', [
            'bookmarks' => $bookmarks,
            'tag' => $tag
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
        //バリデーションチェック
        $this->validate($request, Bookmark::$rules);

        //タグが存在しているかを確認
        if (Bookmark::existTag($request->tag_id) === true) {
            //存在している場合
            $tag_id = $request->tag_id;
        } else {
            $tag_id = null;
        }

        $param = [
            'title' => $request->title,
            'url' => $request->url,
            'user_id' => $request->user_id,
            'tag_id' => $tag_id,
            "isOpen" => false
        ];

        //値をセットして保存
        $bookmark = new Bookmark();
        $bookmark->fill($param)->save();

        //ユーザーのホーム画面にリダイレクト
        return redirect("/mypage");
    }

    //特定のブックマークを取得
    public function edit(Request $request)
    {
        $bookmark = Bookmark::find($request->id);
        $tags = Tag::all();

        return view('bookmark.edit', [
            'bookmark' => $bookmark,
            'tags' => $tags
        ]);
    }

    //ブックマークの編集
    public function update(Request $request)
    {
        //バリデーション
        $this->validate($request, Bookmark::$rules);

        //インスタンスの取得
        $bookmark = Bookmark::find($request->id);

        $param = $request->all();
        //_tokenを値から除外
        unset($param['_token']);
        //値をセットして保存
        $bookmark->fill($param)->save();

        //ユーザのホームにリダイレクト
        return redirect('/mypage');
    }

    //ブックマークの削除
    public function delete(Request $request)
    {
        //削除するブックマークの取得
        $bookmark = Bookmark::find($request->id)->delete();

        //mypageにリダイレクト
        return redirect('/mypage');
    }
}
