<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bookmark;
use App\Tag;
use App\User;
use Faker\Generator as Faker;

$factory->define(Bookmark::class, function (Faker $faker) {
    return [
        'title' => $faker->text(10),
        'url' => "https://{$faker->text(10)}",
        "tag_id" => function () {
            return factory(Tag::class)->create()->id;
        },
        "user_id" => function () {
            return factory(User::class)->create()->id;
        }

    ];
});
