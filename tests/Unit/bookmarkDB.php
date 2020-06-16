<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Bookmark;
use App\User;
use App\Tag;


class bookmarkDB extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();

        $this->tag = factory(Tag::class)->create([
            'user_id' => $this->user->id
        ]);
    }

    /**
     * @test
     */
    public function register_Bookmarkテーブルの新規登録()
    {
        $bookmark = factory(Bookmark::class)->create([
            'tag_id' => $this->tag->id,
            'user_id' => ($this->tag->user_id === $this->user->id) ? $this->user->id : null
        ]);

        $this->assertSame($this->user->id, $bookmark->user_id);

        $this->assertDatabaseHas("bookmarks", $bookmark->toArray());
    }

    /**
     * @test
     */
    public function update_Bookmarkテーブルの更新()
    {
        $bookmark = factory(Bookmark::class)->create([
            'tag_id' => $this->tag->id,
            'user_id' => ($this->tag->user_id === $this->user->id) ? $this->user->id : null
        ]);

        $this->assertSame($this->user->id, $bookmark->user_id);

        $this->assertDatabaseHas("bookmarks", $bookmark->toArray());

        $updateForm = [
            "title" => "afsfasfsfa",
            "url" => "https://afsfasafas",
            "isOpen" => true
        ];

        $bookmark->fill($updateForm)->save();

        $this->assertDatabaseHas("bookmarks", $bookmark->toArray());
    }

    /**
     * @test
     */
    public function delete_Bookmarkテーブルの削除()
    {
        $bookmark = factory(Bookmark::class)->create([
            'tag_id' => $this->tag->id,
            'user_id' => ($this->tag->user_id === $this->user->id) ? $this->user->id : null
        ]);

        $this->assertSame($this->user->id, $bookmark->user_id);

        $this->assertDatabaseHas("bookmarks", $bookmark->toArray());

        $bookmark->delete();

        $this->assertDatabaseMissing("bookmarks", $bookmark->toArray());
    }
}
