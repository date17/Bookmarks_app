@extends('layouts.bookmarksapp')

@section('title', "お問い合わせフォーム")


@section('content')
<div class="form">
    <form action="{{route("contact.confirm")}}" method="POST">
        @csrf
        <label>メールアドレス</label>
        <input type="hidden" name="email" value="{{ Auth::user()->email }}">
        @if ($errors->has("email"))
        <div class="error">{{$errors()->first("email")}}</div>
        @endif
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
        <label>お問い合わせ内容</label>
        <textarea name="body">{{old("body")}}</textarea>
        @if ($errors->has("body"))
        <div class="error">{{$errors->first("body")}}</div>
        @endif
        <button type="submit">入力内容確認</button>
    </form>
</div>
@endsection