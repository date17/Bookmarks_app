<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //入力ガード
    protected $guarded = array('id');

    //バリデーションルール
    public static $rules = array(
        'name' => 'required',
        'user_id' => 'required|integer'
    );

    //ログインしているユーザのIDを使用してその人にマッチしているタグを取得
    public function scopeUserTags($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }

    //has many結合 -- １つのタグにはたくさんのブックマークが存在している（関連している）
    public function Bookmark()
    {
        return $this->hasMany('App\Bookmark');
    }

    //belongsTo結合 -- 従テーブル側で主テーブルの関連しているデータを取得する
    public function Users()
    {
        return $this->belongsTo('App\User');
    }
}
