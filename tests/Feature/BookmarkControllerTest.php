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


        $tag = factory(Tag::class)->create([
            'user_id' => $this->user->id
        ]);

        $bookmarks = factory(Bookmark::class, 10)->create([
            'tag_id' => $tag->id,
            'user_id' => $this->user->id
        ]);

        // api/info --> BookmarkController@info
        $response = $this->get('/api/info');

        $bookmarks = Bookmark::loginUser($this->user->id)->orderBy("created_at", "asc")->get();
        $tags = Tag::userTags($this->user->id)->orderBy("created_at", "asc")->get();

        $response->assertStatus(200)->assertJson([
            "tags" => $tags->toArray(),
            "bookmarks" => $bookmarks->toArray()
        ]);
    }
}
