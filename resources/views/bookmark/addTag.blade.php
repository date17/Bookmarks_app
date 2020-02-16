@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset("css/bookmarks/addTag.css")}}">
@endsection
@section('title', "ADD TAG")


@section('content')
<div class="add-tag">
    @if (count($errors) > 0)
    <div class="errors">
        <div class="error-title">ERROR!!!</div>
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif

    @if (count($tags) > 0)
    <div class="tags">
        <div class="title">EXIST TAGS</div>
        <div class="tags-name">
            @foreach ($tags as $tag)
            <div class="tag">{{$tag->name}}</div>
            @endforeach
        </div>
    </div>
    @endif
    <div class="add-tag-form">
        <div class="form-title">FORM</div>
        <form action="/mypage/tag/add" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
            <div class="first-tag">{</div>
            <div class="name">
                <span>Name:</span>
                <input type="text" name="name" value="{{old("name")}}">
            </div>
            <div class="end-tag">}</div>
            <div class="send-btn">
                <input type="submit" value="ADD">
            </div>
        </form>
    </div>
</div>
@endsection