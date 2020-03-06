@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset("css/common/commonSite.css")}}">
@endsection

@section('title', "COMMON SITE")

@section('content')
<div class="page-main">
    <div class="page-title">
        ALL BOOKMARKS
    </div>
    @if (count($bookmarks) > 0)
    <div class="all-bookmarks">
        @foreach ($bookmarks as $bookmark)
        <div class="bookmark">
            <div class="icon">
                <i class="fas fa-chalkboard"></i>
            </div>
            <div class="detail">
                <div class="title">
                    <a href="{{ $bookmark->url }}" target="_blank">
                        <span>{{$bookmark->title}}</span>
                    </a>
                </div>
                <div class="sub">
                    <div class="user">
                        user:{{ $bookmark->user->name }}
                    </div>
                    <div class="date">
                        create:{{ $bookmark->dateFormat($bookmark->created_at) }}
                    </div>
                </div>
            </div>
        </div>
        @endforeach
        <div class="pagenate">
            {{ $bookmarks->links() }}
        </div>
        @endif
    </div>
</div>
@endsection