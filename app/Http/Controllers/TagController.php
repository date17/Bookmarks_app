<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tag;
use Illuminate\Support\Facades\Auth;

class TagController extends Controller
{
    //タグの一覧を表示
    public function index(Request $request)
    {
        //タグの一覧をモデルクラスを使用して取得したインスタンスを生成
        $tags = Tag::all();

        return view('tag.index', ['tags' => $tags]);
    }

    //ログインしているユーザのタグを取得
    public function indexUser(Request $request)
    {
        //ログインしているユーザのインスタンスを取得
        $user = Auth::user();
        //スコープを利用してユーザと関連しているタグを取得
        if ($user != '') {
            $tags = Tag::userTags($user->id)->get();
            return view('bookmark.user_index', [
                'tags' => $tags,
                'user' => $user
            ]);
        } else {
            return view(('bookmark.user_index'));
        }
    }

    //タグの新規追加
    public function create(Request $request)
    {
        //バリデーションチェック
        $this->validate($request, Tag::$rules);

        //インスタンスの生成
        $tag = new Tag();

        //値の用意
        $form = [
            'name' => $request->name,
            'user_id' => $request->user_id
        ];

        //値をセットしてセーブ
        $tag->fill($form)->save();

        //ユーザー情報の取得
        $user = Auth::user();

        //mypageにリダイレクト
        return redirect('/mypage');
    }
}
