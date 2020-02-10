@extends('layouts.bookmarksapp')

@section('title', 'add Bookmark Form')

@section('content')

@foreach ($tags as $tag)
<p>{{$tag->id}} : {{$tag->name}}</p>
@endforeach

@if(count($errors) > 0)
<ul>
    @foreach ($errors->all() as $error)
    <li>{{$error}}</li>
    @endforeach
</ul>
@endif
<p>user_id:{{Auth::user()->id}}</p>
<form action="/mypage/bookmark/add" method="POST">
    @csrf
    <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
    <label>タイトル :
        <input type="text" name="title" value="{{old('title')}}" required>
    </label>
    <br>
    <label>URL :
        <input type="text" name="url" value="{{old('url')}}" required>
    </label>
    <br>
    <label>タグ :
        <div id="selectTagForm">
            <select name="tag_id">
                @foreach ($tags as $tag)
                <option value={{$tag->id}}>{{$tag->name}}</option>
                @endforeach
            </select>
        </div>
    </label>
    <br>
    <input type="submit" value="add">
</form>

{{-- <script src="{{asset('js/selectOrCreateTag.js')}}"></script> --}}
@endsection