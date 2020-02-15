<html>

<head>
    <title>
        @yield('title')
    </title>
    <link rel="stylesheet" href="{{asset('css/bookmarks/bookmarks.css')}}">
    @yield('link-css')
    {{-- Fontawesomeを利用 --}}
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
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
                <div class="name" id="bookmark-close"><i class="fas fa-angle-right"></i>
                    ブックマーク
                </div>
                <div class="name" id="bookmark-open"><i class="fas fa-angle-down"></i>
                    ブックマーク
                </div>
            </div>
            <div id="label-bookmark-detail">
                <div id="bookmark-add"><a href="/mypage/bookmark/add"><i class="fas fa-link"></i><span>追加</span></a>
                </div>
            </div>
            <div id="label-tag">
                <div class="name" id="tag-close"><i class="fas fa-angle-right"></i>
                    タグ
                </div>
                <div class="name" id="tag-open"><i class="fas fa-angle-down"></i>
                    タグ
                </div>
            </div>
            <div id="label-tag-detail">
                <div id="tag-add"><a href="/mypage/tag/add"><i class="fas fa-link"></i><span>追加</span></a></div>
            </div>
            <div id="label-user">
                <div class="name" id="user-close"><i class="fas fa-angle-right"></i>
                    ユーザー
                </div>
                <div class="name" id="user-open"><i class="fas fa-angle-down"></i>
                    ユーザー
                </div>
            </div>
            <div id="label-user-detail">
                <div id="user-detail"><i class="fas fa-link"></i><span>詳細</span></div>
                <div id="user-logout"><i class="fas fa-link"></i><span>ログアウト</span></div>
                <div id="user-retire"><i class="fas fa-link"></i><span>退会</span></div>
            </div>
            <div id="label-other">
                <div class="name" id="other-close"><i class="fas fa-angle-right"></i>
                    その他
                </div>
                <div class="name" id="other-open"><i class="fas fa-angle-down"></i>
                    その他
                </div>
            </div>
            <div id="label-other-detail">
                <div id="other-common"><i class="fas fa-link"></i><span>共有サイト</span></div>
            </div>
        </div>
        <div class="content">
            @yield('content')
        </div>
    </main>
    {{-- <footer>
        <div class="github"><a href="https://github.com/date17?tab=repositories">My Github Account!</a></div>
        <div class="copyright">copyright kuromame.</div>
    </footer> --}}
    <script src="{{asset('js/layout.js')}}"></script>
</body>

</html>