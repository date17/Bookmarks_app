@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset('css/bookmarks/mypage.css')}}">
@endsection

@section('title', "MYPAGE")

@section('content')
<div id="all-bookmarks">
    @isset($bookmarks)
    <div class="page-title">ALL BOOKMARKS</div>
    @foreach ($bookmarks as $bookmark)
    <div class="title-close"><i class="fas fa-angle-right"></i><span>{{$bookmark->title}}</span></div>
    <div class="title-open"><i class="fas fa-angle-down"></i><span>{{$bookmark->title}}</span></div>
    <div class="detail">
        <div class="first-tag">{</div>
        <div class="url">url:<span><i class="fas fa-link"></i><a href="{{$bookmark->url}}">{{$bookmark->url}}</a></span>
        </div>
        <div class="tag">tag:<span>{{$bookmark->tag->name}}</span></div>
        <div class="publish">Publish:
            <span>
                @if ($bookmark->isOpen)
                TRUE
                @else
                FALSE
                @endif
            </span>
        </div>
        <div class="end-tag">}</div>
        <div class="btn">
            <button class="edit-bookmark" value="{{$bookmark->id}}">編集</button>
            <button class="del-bookmark" value="{{$bookmark->id}}">削除</button>
        </div>
    </div>
    @endforeach
    @endisset
</div>
<div class="all-tags">
    <div class="tags-title">ALL TAGS</div>
    @if (count($tags) > 0)
    <ul>
        @foreach ($tags as $tag)
        <div class="tags">
            <div class="tag">
                <li><a href="/mypage/tag/select/{{$tag->id}}"><span><i class="fas fa-link"></i></span>{{$tag->name}}</a>
                </li>
            </div>
            <div class="btn">
                <button class="del_tag" id="{{$tag->id}}">削除</button>
            </div>
        </div>
        @endforeach
    </ul>
    @endif
</div>
<script src="{{asset("js/mypage.js")}}"></script>
@endsection