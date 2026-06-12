<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRoomRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'             => 'sometimes|required|string|max:255',
            'size'             => 'nullable|integer|min:1',
            'description'      => 'nullable|string',
            'long_description' => 'nullable|string',
            'price'            => 'nullable|integer|min:0',
            'amenities'        => 'nullable|array',
            'images'           => 'nullable|array',
        ];
    }
}
