<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'name',
        'size',
        'description',
        'long_description',
        'price',
        'amenities',
        'images',
    ];

    protected $casts = [
        'amenities' => 'array',
        'images'    => 'array',
        'size'      => 'integer',
        'price'     => 'integer',
    ];
}
