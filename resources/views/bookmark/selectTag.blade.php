@extends('layouts.bookmarksapp')

@section('title', 'BOOKMARKS')

@section('link-css')
<link rel="stylesheet" href="{{asset("css/bookmarks/selectTag.css")}}">
@endsection

@section('content')
<div class="select-tag">
    <div class="title">SELECT TAG</div>
    @if (!is_null($tag))
    <div class="first-tag">{</div>
    <div class="tag"><span>Name:</span>{{$tag->name}}</div>
    <div class="end-tag">}</div>
    @else
    <div class="nothing">Nothing . . .</div>
    @endif
</div>

<div id="all-bookmarks">
    <div class="page-title">BOOKMARKS OF SELECT TAG</div>
    @if (count($bookmarks) > 0)
    @foreach ($bookmarks as $bookmark)
    <div class="title-close"><i class="fas fa-angle-right"></i><span>{{$bookmark->title}}</span></div>
    <div class="title-open"><i class="fas fa-angle-down"></i><span>{{$bookmark->title}}</span></div>
    <div class="detail">
        <div class="first-tag">{</div>
        <div class="url">url:<span><i class="fas fa-link"></i><a href="{{$bookmark->url}}"
                    target="_blank">{{$bookmark->url}}</a></span>
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
    @else
    <div class="nothing">Nothing . . .</div>
    @endif
</div>
<script src="{{asset("js/mypage.js")}}"></script>
@endsection