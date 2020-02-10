<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>Bookmark Index</title>
</head>

<body>
    @isset($bookmarks)
    @foreach ($bookmarks as $bookmark)
    <p>{{ $bookmark->title }}</p>
    <p>{{ $bookmark->url }}</p>
    <p>{{ $bookmark->tag->name }}</p>
    <p>{{ $bookmark->user->name }}</p>
    @endforeach
    @endisset
</body>

</html>