<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class UserControllerTest extends TestCase
{
    use RefreshDatabase, WithoutMiddleware;

    public function setUp(): void
    {
        parent::setUp();
    }

    /**
     * @test
     */
    // public function register()
    // {
    //     $params = [
    //         "name" => "takuya",
    //         "email" => "date1111@ezweb.ne.jp",
    //         "password" => "b4z8nqas",
    //         "password_confirmation" => "b4z8nqas"
    //     ];

    //     $response = $this->json('POST', '/api/register', [
    //         'name' => $params['name'],
    //         'email' => $params['email'],
    //         'password' => $params['password'],
    //         "password_confirmation" => $params['password_confirmation']
    //     ]);

    //     $user = User::find(1);
    //     $response->assertStatus(200)->assertJson([
    //         "id" => $user->id,
    //         "name" => $user->name,
    //         "email" => $user->email,
    //         "created_at" => $user->created_at,
    //         "updated_at" => $user->updated_at
    //     ]);
    // }

    /**
     * @test
     */
    public function login_LoginController()
    {
    }
}
