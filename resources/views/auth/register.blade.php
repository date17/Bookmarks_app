<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Register</title>
    <link rel="stylesheet" href="{{asset("css/user/register.css")}}">
</head>

<body>
    <header>
        <div class="page-title">REGISTER FORM</div>
        <div class="login">
            <div><a href="{{route("login")}}">login</a></div>
        </div>
    </header>
    <main>
        <div class="form">
            <form action="{{route("register")}}" method="post">
                {{ csrf_field() }}
                <div class="first-tag">{</div>
                {{-- name --}}
                <div class="name">
                    <div class="label">Name:</div>
                    <div class="input"><input type="text" name="name" value="{{old("name")}}" required></div>
                </div>
                @if ($errors->has("name"))
                <div class="error">
                    <ul>
                        @foreach ($errors->get("name") as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                {{-- email --}}
                <div class="email">
                    <div class="label">Email:</div>
                    <div class="input"><input type="email" name="email" value="{{old("email")}}" required></div>
                </div>
                @if ($errors->has("email"))
                <div class="error">
                    <ul>
                        @foreach ($errors->get("email") as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                {{-- password --}}
                <div class="password">
                    <div class="label">Password:</div>
                    <div class="input"><input type="password" name="password" autocomplete="off" required></div>
                </div>
                @if ($errors->has("password"))
                <div class="error">
                    <ul>
                        @foreach ($errors->get("password") as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                {{-- password confirm(パスワードの確認用) --}}
                <div class="password-confirm">
                    <div class="label">Confirm Password:</div>
                    <div class="input"><input type="password" name="password_confirmation" autocomplete="off" required>
                    </div>
                </div>
                <div class="end-tag">}</div>
                <div class="send-btn"><input type="submit" value="REGISTER"></div>
            </form>
        </div>
    </main>
</body>

</html>