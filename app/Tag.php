<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //入力ガード
    protected $guard = array('id');

    //バリデーションルール
    public static $rules = array(
        'name' => 'required',
    );

    //has many結合 -- １つのタグにはたくさんのブックマークが存在している（関連している）
    public function Bookmark()
    {
        return $this->hasMany('App\Bookmark');
    }
}
