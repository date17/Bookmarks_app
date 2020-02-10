<?php

use Illuminate\Database\Seeder;

use App\Bookmark;

class BookmarkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'title' => "phpの基礎",
            'url' => 'https://www.php_foundation.com',
            'tag_id' => 1,
            'user_id' => 1
        ];
        $bookmark = new Bookmark();
        $bookmark->fill($param)->save();

        $param = [
            'title' => "HTMLの基礎",
            'url' => 'https://www.html_foundation.com',
            'tag_id' => 2,
            'user_id' => 1
        ];
        $bookmark = new Bookmark();
        $bookmark->fill($param)->save();

        $param = [
            'title' => "CSSの基礎",
            'url' => "https://www.css_foundation.com",
            'tag_id' => 3,
            'user_id' => 1
        ];
        $bookmark = new Bookmark();
        $bookmark->fill($param)->save();
    }
}
