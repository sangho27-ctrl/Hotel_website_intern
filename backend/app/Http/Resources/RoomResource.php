<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'name'             => $this->name,
            'size'             => $this->size,
            'description'      => $this->description,
            'long_description' => $this->long_description,
            'price'            => $this->price,
            'amenities'        => $this->amenities ?? [],
            'images'           => $this->images ?? [],
            'created_at'       => $this->created_at,
            'updated_at'       => $this->updated_at,
        ];
    }
}
