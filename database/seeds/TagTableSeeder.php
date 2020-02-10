<?php

use Illuminate\Database\Seeder;

use App\Tag; //レコードの作成にモデルクラスを使用

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    //レコードを作成するための処理を記述
    public function run()
    {
        $param = [
            'name' => 'php'
        ];
        //Tagモデルのインスタンスを生成
        $tag = new Tag();
        //値をセットして保存
        $tag->fill($param)->save();

        $param = [
            'name' => 'html'
        ];
        //Tagモデルのインスタンスを生成
        $tag = new Tag();
        //値をセットして保存
        $tag->fill($param)->save();

        $param = [
            'name' => 'css'
        ];
        //Tagモデルのインスタンスを生成
        $tag = new Tag();
        //値をセットして保存
        $tag->fill($param)->save();
    }
}
