<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Common extends Model
{
    protected $guard = array('id');

    //バリデーションルール
    public static $rules = array(
        'bookmark_id' => 'require|number',
        'comment' => 'require',
    );
}
