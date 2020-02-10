<html>

<head>
    <title>
        @yield('title')
    </title>
    <link rel="stylesheet" href="{{asset('css/bookmarks.css')}}">
</head>

<body>
    <header>
        <div class="title">@yield('title')</div>
        {{-- ログインしていない時 --}}
        @guest
        <div class="login-check">
            <div class="login"><a href="{{route('login')}}">ログイン</a></div>
            <div class="register"><a href="{{route('register')}}">会員登録</a></div>
        </div>
        @else
        <div class="login-check">
            <div class="user-name">{{Auth::user()->name}}</div>
            <div class="logout"><a href="{{route('logout')}}">ログアウト</a></div>
            @endguest
        </div>
    </header>
    <main>
        <div class="navi">
            <div id="label-bookmark">
                <div>ブックマーク一覧</div>
            </div>
            <div id="label-tag">
                <div>タグ一覧</div>
            </div>
            <div id="label-user">
                <div>ユーザー情報</div>
            </div>
            <div id="label-common">
                <div>共有ページへ</div>
            </div>
        </div>
        <div class="content">
            @yield('content')
        </div>
    </main>
    <footer>
        <div class="github"><a href="https://github.com/date17?tab=repositories">My Github Account!</a></div>
        <div class="copyright">copyright kuromame.</div>
    </footer>
</body>

</html>