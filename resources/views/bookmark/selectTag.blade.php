@extends('layouts.bookmarksapp')

@section('title', 'Bookmarks of select tag')

@section('content')
@isset($bookmarks)
@foreach ($bookmarks as $bookmark)
<p>{{$bookmark->title}}</p>
<p>{{$bookmark->url}}</p>
<p>{{$bookmark->tag->name}}</p>
<button>編集</button>
<button>削除</button>
@endforeach
@endisset
@endsection