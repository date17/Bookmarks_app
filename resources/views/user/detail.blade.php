@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{asset("css/user/detail.css")}}">
@endsection

@section('title', 'DETAIL')


@section('content')
<div class="detail">
    <div class="page-title">YOUR INFOMATION</div>
    <div class="first-tag">{</div>
    <div class="name">
        <div><span>Name:</span>{{Auth::user()->name}}</div>
    </div>
    <div class="email">
        <div><span>Email:</span>{{Auth::user()->email}}</div>
    </div>
    <div class="end-tag">}</div>
</div>
@endsection