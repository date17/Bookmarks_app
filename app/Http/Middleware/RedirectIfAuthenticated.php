<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Http\Traits\User\UserTrait;

class RedirectIfAuthenticated
{
    use UserTrait;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            //もうすでにログインしていた場合、responseを作成して、ログインしているユーザを返す
            $userData = $this->loginUserData();
            return response()->json($userData, 200);
        }

        return $next($request);
    }
}
