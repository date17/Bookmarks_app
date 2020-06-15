<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\User;

class UserDB extends TestCase
{
    use RefreshDatabase;

    //setUp
    public function setUp(): void
    {
        parent::setup();

        //     $this->user =
        //         factory(User::class, 10)->create();
    }

    /**
     * @test
     */
    // public function register_Userテーブルの新規登録()
    // {
    //     $form = [
    //         "name" => "date",
    //         "email" => "date17@ezweb.ne.jp",
    //         "password" => "b4z8nqas",
    //     ];

    //     $user = factory(User::class)->create($form);

    //     $this->assertDatabaseHas('users', $form);
    // $user = factory(User::class, 10)->create();
    // }

    /**
     * @test
     */
    public function update_Userテーブルのレコード更新()
    {
        $form = [
            "name" => "date",
            "email" => "date17@ezweb.ne.jp",
            "password" => "b4z8nqas",
        ];

        $user = factory(User::class)->create($form);

        $this->assertDatabaseHas('users', $form);

        $updateForm = [
            "name" => "date1221",
            "email" => "date172212121@ezweb.ne.jp",
            "password" => "b4z8nqas",
        ];

        $user = User::find($user->id);

        $user->fill($updateForm)->save();

        $this->assertDatabaseHas('users', $updateForm);
    }

    /**
     * @test
     */

    public function delete_Userテーブルのレコード削除()
    {
        $form = [
            "name" => "date",
            "email" => "date17@ezweb.ne.jp",
            "password" => "b4z8nqas",
        ];

        $user = factory(User::class)->create($form);

        $this->assertDatabaseHas('users', $form);

        $user->delete();

        $this->assertDatabaseMissing('users', $form);
    }
}
