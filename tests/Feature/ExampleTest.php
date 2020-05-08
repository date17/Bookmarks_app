<?php
//デフォルトで用意されているテスト用のスクリプトファイル
//Featureは「機能テスト」
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest() //テスト名は自由（メソッド名の冒頭にtestが入っていれば）
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
