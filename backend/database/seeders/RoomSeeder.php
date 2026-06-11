<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    public function run(): void
    {
        Room::truncate();

        $rooms = [
            [
                'name'             => 'The Brighton Suite',
                'size'             => 32,
                'description'      => 'A spacious suite with sea views and a king-size bed, perfect for a romantic getaway.',
                'long_description' => 'The Brighton Suite is our most luxurious room, offering sweeping views of the Sussex coastline from a private balcony. Decorated in warm neutral tones with antique furniture, it features a super king-size bed, a marble en-suite bathroom with rainfall shower, and a dedicated seating area.',
                'price'            => 185,
                'amenities'        => ['En-suite bathroom', 'Sea view', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Air conditioning', 'Hairdryer', 'Safe'],
                'images'           => [],
            ],
            [
                'name'             => 'The Kemp Town Room',
                'size'             => 22,
                'description'      => 'A beautifully appointed double room in the heart of Brighton\'s vibrant Kemp Town quarter.',
                'long_description' => 'Named after the historic Kemp Town neighbourhood, this elegant double room combines Georgian architecture with modern comforts. Features a handcrafted four-poster bed, original cornicing, and an en-suite bathroom with a freestanding roll-top bath.',
                'price'            => 130,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer', 'Desk'],
                'images'           => [],
            ],
            [
                'name'             => 'The Garden Room',
                'size'             => 18,
                'description'      => 'A charming room overlooking our private walled garden — ideal for a peaceful retreat.',
                'long_description' => 'The Garden Room is a light-filled double room on the ground floor with direct views of our secluded walled garden. Decorated in soft sage green tones with botanical prints, it offers a tranquil escape from city life while remaining just minutes from Brighton\'s famous Lanes.',
                'price'            => 110,
                'amenities'        => ['En-suite bathroom', 'Garden view', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer'],
                'images'           => [],
            ],
            [
                'name'             => 'The Classic Double',
                'size'             => 16,
                'description'      => 'A comfortable, well-appointed double room with all the essentials for a great stay.',
                'long_description' => 'Our Classic Double is ideal for guests looking for a stylish and comfortable base from which to explore Brighton. Featuring a queen-size bed, a modern en-suite shower room, and classic Georgian details throughout.',
                'price'            => 95,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer'],
                'images'           => [],
            ],
            [
                'name'             => 'The Seafront King',
                'size'             => 28,
                'description'      => 'A premium king room with partial sea views, just one street from Brighton beach.',
                'long_description' => 'The Seafront King offers the perfect blend of luxury and location. Positioned on the upper floor with partial sea views, it features a super king-size bed, a large en-suite bathroom with both a walk-in shower and soaking tub, and premium Molton Brown toiletries.',
                'price'            => 165,
                'amenities'        => ['En-suite bathroom', 'Sea view', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Air conditioning', 'Mini fridge', 'Hairdryer', 'Safe'],
                'images'           => [],
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
