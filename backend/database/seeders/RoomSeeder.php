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
                'images'           => [
                    '/images/rooms/room-0/room0.avif',
                    '/images/rooms/room-0/room0_1.webp',
                    '/images/rooms/room-0/room0_2.webp',
                    '/images/rooms/room-0/room0_3.webp',
                    '/images/rooms/room-0/room0_4.webp',
                    '/images/rooms/room-0/room0_5.webp',
                ],
            ],
            [
                'name'             => 'The Kemp Town Room',
                'size'             => 22,
                'description'      => 'A beautifully appointed double room in the heart of Brighton\'s vibrant Kemp Town quarter.',
                'long_description' => 'Named after the historic Kemp Town neighbourhood, this elegant double room combines Georgian architecture with modern comforts. Features a handcrafted four-poster bed, original cornicing, and an en-suite bathroom with a freestanding roll-top bath.',
                'price'            => 130,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer', 'Desk'],
                'images'           => [
                    '/images/rooms/room-1/rroom1.webp',
                    '/images/rooms/room-1/rroom1_1.webp',
                    '/images/rooms/room-1/rroom1_2.webp',
                    '/images/rooms/room-1/rroom1_3.webp',
                    '/images/rooms/room-1/rroom1_4.webp',
                ],
            ],
            [
                'name'             => 'The Garden Room',
                'size'             => 18,
                'description'      => 'A charming room overlooking our private walled garden — ideal for a peaceful retreat.',
                'long_description' => 'The Garden Room is a light-filled double room on the ground floor with direct views of our secluded walled garden. Decorated in soft sage green tones with botanical prints, it offers a tranquil escape from city life while remaining just minutes from Brighton\'s famous Lanes.',
                'price'            => 110,
                'amenities'        => ['En-suite bathroom', 'Garden view', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer'],
                'images'           => [
                    '/images/rooms/room-2/rroom2.webp',
                    '/images/rooms/room-2/rroom2_2.webp',
                    '/images/rooms/room-2/rroom2_3.webp',
                    '/images/rooms/room-2/rroom2_4.webp',
                    '/images/rooms/room-2/rroom2_5.webp',
                ],
            ],
            [
                'name'             => 'The Classic Double',
                'size'             => 16,
                'description'      => 'A comfortable, well-appointed double room with all the essentials for a great stay.',
                'long_description' => 'Our Classic Double is ideal for guests looking for a stylish and comfortable base from which to explore Brighton. Featuring a queen-size bed, a modern en-suite shower room, and classic Georgian details throughout.',
                'price'            => 95,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer'],
                'images'           => [
                    '/images/rooms/room-3/rroom3.webp',
                    '/images/rooms/room-3/rroom3_1.webp',
                    '/images/rooms/room-3/rroom3_2.webp',
                    '/images/rooms/room-3/rroom3_3.webp',
                    '/images/rooms/room-3/rroom3_4.webp',
                ],
            ],
            [
                'name'             => 'The Seafront King',
                'size'             => 28,
                'description'      => 'A premium king room with partial sea views, just one street from Brighton beach.',
                'long_description' => 'The Seafront King offers the perfect blend of luxury and location. Positioned on the upper floor with partial sea views, it features a super king-size bed, a large en-suite bathroom with both a walk-in shower and soaking tub, and premium Molton Brown toiletries.',
                'price'            => 165,
                'amenities'        => ['En-suite bathroom', 'Sea view', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Air conditioning', 'Mini fridge', 'Hairdryer', 'Safe'],
                'images'           => [
                    '/images/rooms/room-4/rroom4.webp',
                    '/images/rooms/room-4/rroom4_1.webp',
                    '/images/rooms/room-4/rroom4_2.webp',
                    '/images/rooms/room-4/rroom4_3.webp',
                    '/images/rooms/room-4/rroom4_4.webp',
                ],
            ],
            [
                'name'             => 'The Regency Room',
                'size'             => 20,
                'description'      => 'An elegant room with period-style furnishings and a luxurious en-suite bathroom.',
                'long_description' => 'The Regency Room celebrates Brighton\'s rich Regency heritage with carefully chosen period-style furniture, rich fabrics, and original artwork. The spacious en-suite features a freestanding bath and a separate walk-in shower.',
                'price'            => 140,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer', 'Bathtub'],
                'images'           => [
                    '/images/rooms/room-5/rroom5.webp',
                    '/images/rooms/room-5/rroom5_1.webp',
                    '/images/rooms/room-5/rroom5_2.webp',
                    '/images/rooms/room-5/rroom5_3.webp',
                    '/images/rooms/room-5/rroom5_5.webp',
                ],
            ],
            [
                'name'             => 'The Laines Suite',
                'size'             => 30,
                'description'      => 'A generous suite steps away from Brighton\'s famous North Laine shopping district.',
                'long_description' => 'Named after Brighton\'s iconic North Laine quarter, this spacious suite blends contemporary style with boutique charm. It features a king-size bed, a large living area with sofa, and a luxurious bathroom with both a roll-top bath and rainfall shower.',
                'price'            => 175,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Air conditioning', 'Sofa', 'Bathtub', 'Hairdryer', 'Safe'],
                'images'           => [
                    '/images/rooms/room-6/rroom6.webp',
                    '/images/rooms/room-6/rroom6_1.webp',
                    '/images/rooms/room-6/rroom6_2.webp',
                    '/images/rooms/room-6/rroom6_3.webp',
                    '/images/rooms/room-6/rroom6_4.webp',
                ],
            ],
            [
                'name'             => 'The Pavilion Room',
                'size'             => 24,
                'description'      => 'A refined double room inspired by the grandeur of the Royal Pavilion.',
                'long_description' => 'Drawing inspiration from Brighton\'s iconic Royal Pavilion, this beautifully decorated room features rich jewel-toned fabrics, ornate details, and a supremely comfortable super king-size bed. The en-suite bathroom offers a walk-in shower and heated floor.',
                'price'            => 150,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Heated bathroom floor', 'Hairdryer', 'Safe'],
                'images'           => [
                    '/images/rooms/room-7/rroom7.webp',
                    '/images/rooms/room-7/rroom7_1.webp',
                    '/images/rooms/room-7/rroom7_2.webp',
                    '/images/rooms/room-7/rroom7_3.webp',
                    '/images/rooms/room-7/rroom7_4.webp',
                ],
            ],
            [
                'name'             => 'The Cliftonville Room',
                'size'             => 19,
                'description'      => 'A stylish and cosy double room in a quiet wing of the house.',
                'long_description' => 'The Cliftonville Room is a thoughtfully designed retreat tucked in the quietest wing of Colson House. Ideal for those seeking calm and privacy, it features a queen-size bed, bespoke fitted wardrobes, and a modern en-suite shower room with premium toiletries.',
                'price'            => 115,
                'amenities'        => ['En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee', 'Hairdryer', 'Blackout curtains'],
                'images'           => [
                    '/images/rooms/room-8/rroom8.webp',
                    '/images/rooms/room-8/rroom8_1.webp',
                    '/images/rooms/room-8/rroom8_2.webp',
                    '/images/rooms/room-8/rroom8_3.webp',
                    '/images/rooms/room-8/rroom8_4.webp',
                ],
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
