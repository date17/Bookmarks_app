@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset('css/bookmarks/addBookmark.css')}}">
@endsection

@section('title', 'ADD BOOKMARK')

@section('content')

<div class="create-form">
    <div class="page-title">FORM</div>
    {{-- エラーがあった場合 --}}
    @if(count($errors) > 0)
    <div class="error">
        <div class="error-title">ERROR!!!</div>
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif
    {{-- フォーム --}}
    <div class="form">
        <form action="/mypage/bookmark/add" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
            <div class="first-tag">{</div>
            <div class="title">
                <div class="label">Title:</div>
                <div class="input"><input type="text" name="title" value="{{old("title")}}" required></div>
            </div>
            <div class="url">
                <div class="label">Url:</div>
                <div class="input"><input type="text" name="url" value="{{old("url")}}" required></div>
            </div>
            <div class="tag">
                <div class="label">Tag:</div>
                @if (count($tags) > 0)
                <div class="select">
                    <select name="tag_id" value="{{old("tag_id")}}">
                        <option value="" disabled selected>タグをお選びください</option>
                        @foreach ($tags as $tag)
                        <option value="{{$tag->id}}">{{$tag->name}}</option>
                        @endforeach
                    </select>
                </div>
                @else
                @endif
            </div>
            <div class="end-tag">}</div>
            <div class="send-btn"><input type="submit" value="ADD"></div>
        </form>
    </div>
</div>

{{-- <script src="{{asset('js/selectOrCreateTag.js')}}"></script> --}}
@endsection