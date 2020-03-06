<?php

namespace App\Http\Middleware;

use Closure;

class CheckBoolean
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //リクエストの公開するかどうかのisOpenの値を真偽値に変換してコントローラーに渡す
        if ($request->isOpen === 0) {
            $request->isOpen = false;
        } elseif ($request->isOpen === 1) {
            $request->isOpen = true;
        }
        return $next($request);
    }
}
