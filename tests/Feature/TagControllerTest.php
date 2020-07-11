<?php

namespace Tests\Feature;

use App\Bookmark;
use App\Tag;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class TagControllerTest extends TestCase
{
    use RefreshDatabase, WithoutMiddleware;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();
    }

    /**
     * @test
     */
    public function index_TagController_index()
    {
        //Tagのダミーデータを作成
        factory(Tag::class, 10)->create([
            "user_id" => $this->user->id
        ]);

        $tags = Tag::where("user_id", $this->user->id)->get()->toArray();

        // GET: /api/tag
        $response = $this->json("GET", "/api/tag", [
            "id" => $this->user->id
        ]);


        $response->assertStatus(200)
            ->assertJsonCount(10);
    }

    /**
     * @test
     */
    public function indexError_TagController_index_error()
    {
        // GET: /api/tag
        $response = $this->json("GET", "/api/tag");

        $response->assertStatus(422);
    }

    /**
     * @test
     */
    public function create_TagController_create()
    {
        //タグの新規登録用のデータ
        $params = [
            "name" => "tag",
            "user_id" => $this->user->id
        ];

        // POST: /api/tag
        $response = $this->json("POST", "/api/tag", $params);

        $tags_count = Tag::where("user_id", $this->user->id)->count();

        $response->assertStatus(200)->assertJsonCount($tags_count);
    }

    /**
     * @test
     */
    public function createError_TagController_create_error()
    {
        //タグの新規登録用のデータ(抜け漏れあり)
        $params = [
            // "name" => "tag",
            "user_id" => $this->user->id
        ];
        // POST: /api/tag
        $response = $this->json("POST", "/api/tag", $params);

        $response->assertStatus(422);
    }

    /**
     * @test
     */
    public function update_TagController_update()
    {
        //新規登録用のタグのデータ
        $create_params = [
            "name" => "create",
            "user_id" => $this->user->id
        ];

        $create_tag = factory(Tag::class)->create($create_params);

        $this->assertSame($create_tag->name, $create_params["name"]);

        //編集用のタグのデータ
        $update_params = [
            "id" => $create_tag->id,
            "name" => "update",
            "user_id" => $this->user->id
        ];

        //PUT: /api/tag
        $response = $this->json("PUT", "/api/tag", $update_params);

        $response->assertStatus(200);

        $update_tag = Tag::find($create_tag->id);

        $this->assertSame($update_params["name"], $update_tag->name);
        $this->assertSame($update_params["user_id"], $update_tag->user_id);
    }
}
