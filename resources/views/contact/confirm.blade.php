@extends('layouts.bookmarksapp')

@section('title', "入力内容確認")

@section('content')
<form method="POST" action="{{ route('contact.send') }}">
    @csrf

    <label>メールアドレス</label>
    {{ $inputs['email'] }}
    <input name="email" value="{{ $inputs['email'] }}" type="hidden">

    <label>タイトル</label>
    {{ $inputs['category'] }}
    <input name="category" value="{{ $inputs['category'] }}" type="hidden">


    <label>お問い合わせ内容</label>
    {{  $inputs['body'] }}}
    <input name="body" value="{{ $inputs['body'] }}" type="hidden">

    <button type="submit" name="action" value="back">
        入力内容修正
    </button>
    <button type="submit" name="action" value="submit">
        送信する
    </button>
</form>
@endsection