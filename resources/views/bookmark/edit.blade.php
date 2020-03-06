@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset('css/bookmarks/editBookmark.css')}}">
@endsection

@section('title', 'edit Bookmark')

@section('content')

<div class="edit-form">
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
        <form action="/mypage/bookmark/edit/{{$bookmark->id}}" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
            <div class="first-tag">{</div>
            <div class="title">
                <span>Title:</span>
                <input type="text" name="title" value="{{$bookmark->title}}" required class="input">
            </div>
            <div class="url">
                <span>Url:</span>
                <input type="text" name="url" value="{{$bookmark->url}}" required class="input">
            </div>
            <div class="tag">
                <span>Tag:</span>
                @if (count($tags) > 0)
                <select name="tag_id" value="{{$bookmark->tag}}">
                    @foreach ($tags as $tag)
                    @if ($bookmark->tag_id === $tag->id)
                    <option value="{{$tag->id}}" selected>{{$tag->name}}</option>
                    @else
                    <option value="{{$tag->id}}">{{$tag->name}}</option>
                    @endif
                    @endforeach
                </select>
                @else
                @endif
            </div>
            <div class="publish">
                <input type="hidden" name="isOpen" value="0">
                @if ($bookmark->isOpen)
                <input type="checkbox" name="isOpen" value="1" checked>
                @else
                <input type="checkbox" name="isOpen" value="1">
                @endif
                <span>公開する場合はチェックを入れてください</span>
            </div>
            <div class="end-tag">}</div>
            <div class="send-btn"><input type="submit" value="UPDATE"></div>
        </form>
    </div>
</div>

{{-- <script src="{{asset('js/selectOrCreateTag.js')}}"></script> --}}
@endsection