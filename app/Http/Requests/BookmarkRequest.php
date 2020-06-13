<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class BookmarkRequest extends FormRequest
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
            'title' => ['required'],
            'url' => ['url'],
            'tag_id' => ['required', 'integer', 'exists:tags,id'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'isOpen' => ['boolean'],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'タイトルは必須項目です',
            'url.url' => 'URLはURL形式になります',
            'tag_id.required' => 'タグは必須項目です',
        ];
    }

    // protected function validationData() {
    // }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
