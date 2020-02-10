@extends('layouts.bookmarksapp')

@section('title')

@section('content')
@if (count($bookmarks) > 0)
@foreach ($bookmarks as $bookmark)
<p>タイトル : {{$bookmark->title}}</p>
<p>URL : {{$bookmark->url}}</p>
<p>タグ : {{$bookmark->tag->name}}</p>
<button><a href="/mypage/bookmark/edit/{{$bookmark->id}}">編集</a></button>
@endforeach
@else
<p>ブックマークがありません</p>
@endif
@endsection