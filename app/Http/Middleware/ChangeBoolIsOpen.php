<?php

namespace App\Http\Middleware;

use Closure;

class ChangeBoolIsOpen
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
        //リクエストで受け取ったisOpenはboolean型であるため、それを直す
        if (isset($request->isOpen_bool)) {
            $isOpen_bool = $request->isOpen_bool;
            if ($isOpen_bool) {
                $request->isOpen = 1;
            } else {
                $request->isOpen = 0;
            }
        }

        $next($request);
    }
}
