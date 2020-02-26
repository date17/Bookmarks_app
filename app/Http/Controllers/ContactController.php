<?php

namespace App\Http\Controllers;

use App\Mail\SampleMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    //カテゴリーの組み合わせ
    static private $category = [
        "0" => "エラーに関するお問い合わせ",
        "1" => "改善に関するお問い合わせ",
        "2" => "不適切な投稿に関するお問い合わせ"
    ];

    public function __construct()
    {
        //ログイン必須の操作
        $this->middleware("auth");
    }

    public function index(Request $request)
    {
        return view("contact.index", [
            "category" => self::$category
        ]);
    }

    public function confirm(Request $request)
    {
        //バリデーション
        $request->validate([
            "email" => "required|email",
            "category" => "required",
            "body" => "required"
        ]);

        //フォームから入力されたものを取り出す
        $inputs = [
            "email" => $request->email,
            "category" => self::$category[$request->category],
            "body" => $request->body
        ];

        //入力確認画面に入力の値を渡して表示
        return view("contact.confirm", [
            "inputs" => $inputs
        ]);
    }

    public function send(Request $request)
    {
        //バリデーション
        $request->validate([
            "email" => "required|email",
            "category" => "required",
            "body" => "required"
        ]);

        //フォームから受け取ったactionの値を取得
        $action = $request->input("action");

        //フォームから受け取ったaction以外の値を取得
        $inputs = $request->all();
        unset($inputs["action"]);

        //actionで分岐
        if ($action !== "submit") {
            return redirect()
                ->route("contact.index")
                ->withInput($inputs);
        } else {
            //入力されたメールアドレスに送信
            \Mail::to("taminanguan@gmail.com")->send(new SampleMail($inputs));

            //再送信を防ぐためにトークンを発行
            $request->session()->regenerateToken();

            //送信完了画面を表示
            return view("contact.thanks");
        }
    }
}
