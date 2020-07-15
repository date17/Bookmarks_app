<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class TagRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'user_id' => 'required|integer|exists:users,id'
        ];
    }

    //messageを変更するためにメソッドmessages()をオーバーライド
    public function messages()
    {
        return [
            'name' => 'タグの名前は必須項目です',
            'user_id.required' => 'ユーザーの設定が行われておりません',
            'user_id.integer' => 'ユーザーIDが正しくありません',
            'user_id.exists' => 'ユーザーが相応しくありません'
        ];
    }

    //バリデーション失敗時にリダイレクトするのではなくJsonAPIを返したいため、メソッドfailedValidation()をオーバーライド
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors), 422);
    }
}
