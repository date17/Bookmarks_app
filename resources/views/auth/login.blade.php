<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="{{asset("css/user/login.css")}}">
</head>

<body>
    <header>
        <div class="page-title">LOGIN FORM</div>
        <div class="register">
            <div>register</div>
        </div>
    </header>
    <main>
        <div class="form">
            <form action="{{route("login")}}" method="POST">
                {{ csrf_field() }}
                <div class="first-tag">{</div>
                <div class="email-address">
                    <div class="label">Email:</div>
                    <div class="input"><input type="email" name="email" value="{{old("email")}}" required></div>
                </div>
                @if($errors->has("email"))
                <div class="error-email">
                    <ul>
                        @foreach ($errors->get("email") as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                <div class="password">
                    <div class="label">Passward:</div>
                    <div class="input"><input type="password" name="password" autocomplete="off" required></div>
                </div>
                @if ($errors->has("password"))
                <div class="error-password">
                    <ul>
                        @foreach ($error->get("password") as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                <div class="end-tag">}</div>
                <div class="send-btn">
                    <input type="submit" value="LOGIN">
                </div>
            </form>
        </div>
    </main>
</body>

</html>