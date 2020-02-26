<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SampleMail;

class TestMailController extends Controller
{
    public function send()
    {
        return Mail::to('taminanguan@gmail.com')->send(new SampleMail());
    }
}
