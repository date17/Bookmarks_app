<html>

<head>
    <meta charset="utf-8">
    <title>みんなのBOOKMARK</title>
    <link rel="stylesheet" href="{{asset("css/lp/lp.css")}}">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
</head>

<body>
    <header>
        <div class="icon"><i class="fas fa-bookmark"></i></div>
        <div class="title">
            SHEREs
        </div>
        <div class="ja">----ブックマーク共有アプリ----</div>
    </header>
    <main>
        <div class="explain">
            <div class="detail">
                <div class="first">通常のブックマーク機能に加え</div>
                <div class="common">
                    共有ブックマーク機能<span>により、</span>
                </div>
                <div class="end">ユーザー間で有益な情報を<span>Shere</span>することができます。</div>
            </div>
        </div>
        <div class="link">
            <div class="register">
                <a href="{{ route("register") }}">
                    register
                </a>
            </div>
            <div class="login">
                <a href="{{ route("login") }}">
                    login
                </a>
            </div>
        </div>
    </main>
    <footer>
        <div class="github">
            <a href="https://github.com/date17" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <div class="developer">DEVELOPER
            <a href="https://portfolio-app-bd497.firebaseapp.com/" target="_blank">
                KUROMAME
            </a>
            .
        </div>
    </footer>
</body>

</html>