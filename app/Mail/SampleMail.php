<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SampleMail extends Mailable
{
    use Queueable, SerializesModels;
    private $title;
    private $email;
    private $body;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($inputs)
    {
        $this->email = $inputs["email"];
        $this->category = $inputs["category"];
        $this->body = $inputs["body"];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from($this->email) //送信元
            ->subject($this->category) //メールタイトル
            ->view("contact.mail") //メール本文のテンプレートとなるviewを設定
            ->with([
                "email" => $this->email,
                "category" => $this->category,
                "body" => $this->body
            ]); //変数を引き渡す
    }
}
