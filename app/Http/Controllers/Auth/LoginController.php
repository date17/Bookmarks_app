<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    //authenticatedをオーバーライド
    public function authenticated(Request $request, $user)
    {
        //SPAのため、ログインしているユーザを返してあげる
        return $user;
    }

    //loggedOutをオーバーライド
    public function loggedOut(Request $request)
    {
        //セッションを再生成する
        $request->session()->regenerate();

        //SPAであるため、logoutしたことのみを伝える
        return response("success logout", 200);
    }
}
