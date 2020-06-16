<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class TagDB extends TestCase
{

    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    // public function testExample()
    // {
    //     $this->assertTrue(true);
    // }

    /**
     * @test
     */
    public function register_Tagテーブル新規登録()
    {
        $id = $this->user->id;
        $tag = factory(Tag::class)->create([
            "user_id" => $id
        ]);

        $this->assertDatabaseHas("tags", $tag->toArray());
    }

    /**
     * @test
     */
    public function update_Tagテーブルの更新()
    {
        $id = $this->user->id;
        $tag = factory(Tag::class)->create([
            "user_id" => $id
        ]);

        $this->assertDatabaseHas("tags", $tag->toArray());

        $updateForm = [
            "name" => "勉強",
        ];

        $tag->fill($updateForm)->save();

        $this->assertDatabaseHas("tags", $tag->toArray());
    }

    /**
     * @test
     */
    public function delete_Tagテーブルの削除()
    {
        $id = $this->user->id;
        $tag = factory(Tag::class)->create([
            "user_id" => $id
        ]);

        $this->assertDatabaseHas("tags", $tag->toArray());

        $tag->delete();

        $this->assertDatabaseMissing("tags", $tag->toArray());
    }
}
