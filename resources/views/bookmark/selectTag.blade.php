@extends('layouts.bookmarksapp')

@section('title', 'Bookmarks of select tag')

@section('content')
@isset($bookmarks)
@foreach ($bookmarks as $bookmark)
<p>{{$bookmark->title}}</p>
<p>{{$bookmark->url}}</p>
<p>{{$bookmark->tag->name}}</p>
<a href="/mypage/bookmark/edit/{{$bookmark->id}}">
    <button>編集</button>
</a>
<a href="/mypage/bookmark/delete/{{$bookmark->id}}">
    <button>削除</button>
</a>
@endforeach
@endisset
@endsection