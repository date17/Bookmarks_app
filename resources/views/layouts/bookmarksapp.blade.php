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
        <div class="login-guest">
            <div class="login"><a href="{{route('login')}}">LOGIN</a></div>
            <div class="register"><a href="{{route('register')}}">REGISTER</a></div>
        </div>
        @else
        <div class="login-user">
            <div class="first-tag">{</div>
            <div class="user-name"><span>Name:</span>{{Auth::user()->name}}</div>
            <div class="end-tag">}</div>
            @endguest
        </div>
    </header>
    <main>
        <div class="navi">
            <div id="mypage">
                <div class="title"><a href="/mypage">MYPAGE</a></div>
            </div>
            <div id="label-bookmark">
                <div class="name" id="bookmark-close"><i class="fas fa-angle-right"></i>
                    BOOKMARK
                </div>
                <div class="name" id="bookmark-open"><i class="fas fa-angle-down"></i>
                    BOOKMARK
                </div>
            </div>
            <div id="label-bookmark-detail">
                <div id="bookmark-add"><a href="/mypage/bookmark/add"><i class="fas fa-link"></i><span>ADD</span></a>
                </div>
            </div>
            <div id="label-tag">
                <div class="name" id="tag-close"><i class="fas fa-angle-right"></i>
                    TAG
                </div>
                <div class="name" id="tag-open"><i class="fas fa-angle-down"></i>
                    TAG
                </div>
            </div>
            <div id="label-tag-detail">
                <div id="tag-add"><a href="/mypage/tag/add"><i class="fas fa-link"></i><span>ADD</span></a></div>
            </div>
            <div id="label-user">
                <div class="name" id="user-close"><i class="fas fa-angle-right"></i>
                    USER
                </div>
                <div class="name" id="user-open"><i class="fas fa-angle-down"></i>
                    USER
                </div>
            </div>
            <div id="label-user-detail">
                <div id="user-detail"><a href="/mypage/user/detail"><i class="fas fa-link"></i><span>DETAIL</span></a>
                </div>
                <div id="user-logout"><i class="fas fa-link"></i><span>LOGOUT</span></div>
                {{-- logoutform  javascriptで使うため、常に非表示--}}
                <form id="logoutForm" action="{{route("logout")}}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
                <div id="user-retire"><i class="fas fa-link"></i><span>RETIRE</span></div>
            </div>
            <div id="label-other">
                <div class="name" id="other-close"><i class="fas fa-angle-right"></i>
                    OTHER
                </div>
                <div class="name" id="other-open"><i class="fas fa-angle-down"></i>
                    OTHER
                </div>
            </div>
            <div id="label-other-detail">
                <div id="other-common"><i class="fas fa-link"></i><span>COMMON SITE</span></div>
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