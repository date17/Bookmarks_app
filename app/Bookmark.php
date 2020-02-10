<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    //入力ガードを設定しておくもの
    protected $guarded = array('id');

    //バリデーションルールをまとめる
    public static $rules = array(
        'title' => 'required',
        'url' => 'url',
        'tag_id' => 'number',
        'user_id' => 'required|number',
    );

    //ログインしているユーザのブックマークを取得
    public function scopeLoginUser($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }

    //mypageで選択されたタグに紐づいているブックマークを取得
    public function scopeSelectTag($query, $tag_id)
    {
        return $query->where('tag_id', $tag_id);
    }

    //has One結合（commonテーブル）
    public function common()
    {
        return $this->hasOne('App\Common');
    }

    //belongs To結合（tagテーブルと）tag_idを使ってタグの名前を参照したい
    public function tag()
    {
        return $this->belongsTo('App\Tag');
    }
    //belongs To結合（userテーブルと）user_idを使ってユーザを関連付ける。（必要ないかも）
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
