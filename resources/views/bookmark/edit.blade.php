@extends('layouts.bookmarksapp')

@section('title', 'bookmark edit')

@section('content')
<form action="/mypage/bookmark/edit/{{$bookmark->id}}" method="post">
    {{ csrf_field() }}
    <input type="hidden" name="user_id" value="{{$bookmark->user_id}}">
    <input type="hidden" name="id" value="{{$bookmark->id}}">
    <label>タイトル
        <input type="text" name="title" value="{{$bookmark->title}}">
    </label>
    <br>
    <label>URL
        <input type="text" name="url" value="{{$bookmark->url}}">
    </label>
    <br>
    <label>タグ
        <select name="tag_id">
            @foreach ($tags as $tag)
            <option value="{{$tag->id}}">{{$tag->name}}</option>
            @endforeach
        </select>
    </label>
    <br>
    <input type="submit" value="update">
</form>
@endsection