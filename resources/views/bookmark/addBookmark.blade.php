@extends('layouts.bookmarksapp')

@section('title', 'add Bookmark Form')

@section('content')
<form action="/addbookmark" method="POST">
    @csrf
    <label>タイトル :
        <input type="text" name="title" required>
    </label>
    <br>
    <label>URL :
        <input type="text" name="url" required>
    </label>
    <br>
    <label>タグ :
        <div id="selectTag">タグを選択</div>
        <div id="createTag">新しいタグを作成</div>
        <input id="tag_check" type="hidden" name="tag_check" value="none">
    </label>
    <div id="selectTagForm">
        <select name="tag_id">
            @foreach ($tags as $tag)
            <option value={{$tag->id}}>{{$tag->name}}</option>
            @endforeach
        </select>
    </div>
    <div id="createTagForm">
        タグ名 :
        <input type="text" name="tag_name">
    </div>
    <br>
    <input type="submit" value="add">
</form>

<script src="{{asset('js/selectOrCreateTag.js')}}"></script>
@endsection