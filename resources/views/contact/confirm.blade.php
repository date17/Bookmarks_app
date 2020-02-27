@extends('layouts.bookmarksapp')

@section('link-css')
<link rel="stylesheet" href="{{ asset("css/contact/confirm.css") }}">
@endsection

@section('title', "入力内容確認")

@section('content')
<div class="form">
    <form method="POST" action="{{ route('contact.send') }}">
        @csrf
        <div class="email">
            <label>FROM</label>
            {{ $inputs['email'] }}
            <input name="email" value="{{ $inputs['email'] }}" type="hidden">
        </div>
        <div class="category">
            <label>カテゴリー</label>
            {{ $inputs['category'] }}
            <input name="category" value="{{ $inputs['category'] }}" type="hidden">
        </div>
        <div class="body">
            <label>内容</label>
            <div class="text">
                {{  $inputs['body'] }}
            </div>
            <input name="body" value="{{ $inputs['body'] }}" type="hidden">
        </div>
        <div class="edit-btn">
            <button type="submit" name="action" value="back">
                入力内容修正
            </button>
        </div>
        <div class="send-btn">
            <button type="submit" name="action" value="submit">
                送信する
            </button>
        </div>
    </form>
</div>
@endsection