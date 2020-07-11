<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Bookmark;
use App\Tag;
use App\User;

class BookmarkControllerTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        //ユーザ作成とログイン
        $this->user = factory(User::class)->create([
            "password" => bcrypt('b4z8nqas')
        ]);
    }

    /**
     * @test
     */

    public function info_BookmarkController_info()
    {
        $response = $this->post('/api/login', [
            'email' => $this->user->email,
            'password' => 'b4z8nqas'
        ]);


        factory(Tag::class)->create([
            'user_id' => $this->user->id
        ]);

        $tag = Tag::where("user_id", $this->user->id)->get();

        factory(Bookmark::class, 10)->create([
            'tag_id' => mt_rand(1, $tag->count()),
            'user_id' => $this->user->id
        ]);

        $bookmarks = Bookmark::where("user_id", $this->user->id)->get();

        // api/info --> BookmarkController@info
        $response = $this->get('/api/info');

        $tags_array = $tag->toArray();
        $bookmarks_array = $bookmarks->toArray();

        $response->assertStatus(200)->assertJsonFragment([
            "tags" => $tags_array,
            "bookmarks" => $bookmarks_array
        ]);
    }

    /**
     * @test
     */
}
