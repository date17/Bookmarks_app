@extends('layouts.bookmarksapp')

@section('title', 'MyPage')

@section('content')
<div class="tag-all">
    <p>登録しているタグ</p>
    @isset($tags)
    <div class="tags">
        @foreach ($tags as $tag)
        <div class="tag">
            <div class="tag-title">
                <a href="/mypage/tag/select/{{$tag->id}}">
                    {{ $tag->name }}
                </a>
                <a href="/mypage/tag/delete/{{$tag->id}}">
                    <button>
                        タグの削除
                    </button>
                </a>
            </div>
        </div>
        @endforeach
    </div>
    @endisset
    <div class="tag-add" id="tag-add">
        <img src="{{asset('image/pngtree-button-plus-icon-png-image_3566853.jpg')}}" alt="プラスのロゴ">
    </div>
    <div id="addTagForm">
        <form action="/mypage/tag/add" method="post">
            @csrf
            <input type="hidden" name="user_id" value={{$user->id}}>
            <label>Tagの名前：
                <input type="text" name='name' required>
            </label>
            <input type="submit" value="send">
            <button type="button" id="cancel">キャンセル</button>
        </form>
    </div>
</div>
<script src="{{asset('js/addTagForm.js')}}"></script>
@endsection