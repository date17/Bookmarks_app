@extends('layouts.bookmarksapp')


@section('link-css')
<link rel="stylesheet" href="{{ asset("css/contact/index.css") }}">
@endsection

@section('title', "CONTACT FORM")

@section('content')
<div class="form">
    <form action="{{route("contact.confirm")}}" method="POST">
        @csrf
        <div class="email">
            <label>From</label>
            <input type="hidden" name="email" value="{{ Auth::user()->email }}">
            <div class="value">{{Auth::user()->email}}</div>
            @if ($errors->has("email"))
            <div class="error">{{$errors()->first("email")}}</div>
            @endif
        </div>
        <div class="category">
            <label>タイトル（カテゴリ）</label>
            @isset($category)
            <select name="category" required>
                <option value="" disabled selected>選択してください</option>
                @foreach ($category as $key => $value)
                <option value="{{$key}}">{{ $value }}</option>
                @endforeach
            </select>
            @else
            <input type="text" name="category" value="{{ old("category") }}">
            @endisset
            @if ($errors->has("category"))
            <div class="error">{{$errors->first("category")}}</div>
            @endif
        </div>
        <div class="body">
            <label>お問い合わせ内容</label>
            <textarea name="body">{{old("body")}}</textarea>
            @if ($errors->has("body"))
            <div class="error">{{$errors->first("body")}}</div>
            @endif
        </div>
        <div class="btn">
            <button type="submit">入力内容確認</button>
        </div>
    </form>
</div>
@endsection