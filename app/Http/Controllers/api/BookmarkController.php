<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookmark;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $bookmarks = Bookmark::loginUser($request->id)->get();
            return $bookmarks;
        } else {
            return response("not id data", 200);
        }
    }
    public function create(Request $request, Bookmark $bookmark)
    {
        return DB::transaction(function () use ($request, $bookmark) {

            $this->validate($request, Bookmark::$rules);

            $form = $request->all();

            $bookmark->fill($form)->save();

            $bookmarks = Bookmark::loginUser($request->user_id)->get();

            return response($bookmarks, 200);
        });
    }
}
