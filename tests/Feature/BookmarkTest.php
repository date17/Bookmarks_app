<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Bookmark;

//bookmarkテーブルのテスト
class BookmarkTest extends TestCase
{

    //テスト終了時にテスト前の状態に戻すトレイト
    use DatabaseMigrations;
    /**
     * A basic feature test example.
     *
     * @test
     */
    public function testBookmarkCreate()
    {
        //ダミーデータ
        factory(Bookmark::class);
    }
}
