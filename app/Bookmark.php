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
