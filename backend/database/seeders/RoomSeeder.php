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
                'name'             => 'Room 0, Deluxe King Room',
                'size'             => 18,
                'description'      => 'Deluxe Ground Floor King Room. This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable.',
                'long_description' => 'Room 0 Deluxe Ground Floor King Room - 18m². This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable. Super comfy Kingsize bed, egyptian cotton linen, 32" smart led tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access',
                    'CD Player', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping',
                    'Designer Toiletries', 'Duvet', 'DVD Library', 'DVD Player', 'Egyptian Cotton Linen',
                    'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Full-Length Mirror',
                    'Hair Dryer In Room', 'Hairdryer', 'Heating Throughout Property', 'Internet via TV',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Linen & Towels Supplied',
                    'Make Up Mirror', 'Private Bathroom', 'Radio', 'Remote Control TV', 'Shower EnSuite',
                    'Tea/Coffee', 'Television', 'WC EnSuite', 'WI-FI Internet Access', 'Wifi Free',
                    'Windows open',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-0/room0.avif'],
                    array_map(fn($i) => "/images/rooms/room-0/room0_{$i}.webp", range(1, 31))
                ),
            ],
            [
                'name'             => 'Room 1, Luxurious Small Double',
                'size'             => 10,
                'description'      => 'Compact Double. This room is small but beautifully formed. Situated on the first floor at the rear of the house with ensuite wetroom and underfloor heating.',
                'long_description' => 'Room 1 Compact Double - 10m². This room is small but beautifully formed. Situated on the first floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'Designer Toiletries', 'Desk Chair', 'Duvet', 'DVD Player',
                    'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge',
                    'Full-Length Mirror', 'Hair Dryer In Room', 'Hairdryer', 'Heating Throughout Property',
                    'I-Pod docking station', 'Iron and Ironing Board on request', 'Ironing Facilities',
                    'Kettle', 'LCD/Plasma Television', 'Linen & Towels Supplied', 'Make Up Mirror',
                    'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Shower Room', 'Tea/Coffee',
                    'Television', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite',
                    'WI-FI Internet Access', 'Wifi Free', 'Windows open', 'Work Desk', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-1/rroom1.webp'],
                    array_map(fn($i) => "/images/rooms/room-1/rroom1_{$i}.webp", range(1, 15))
                ),
            ],
            [
                'name'             => 'Room 2, Rear Aspect Luxury Double',
                'size'             => 16,
                'description'      => 'Luxury Double/Twin. Situated on the first floor at the rear of the house, beautifully decorated with quality fixtures and fittings. Kingsize bed or 2 singles available.',
                'long_description' => 'Room 2 Luxury Double/Twin - 16m². This room is situated on the first floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. Kingsize bed or 2 singles, egyptian cotton linen, 32" lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'LCD/Plasma Television',
                    'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-2/rroom2.webp'],
                    array_map(fn($i) => "/images/rooms/room-2/rroom2_{$i}.webp", range(2, 10))
                ),
            ],
            [
                'name'             => 'Room 3, Front Aspect Luxury Suite',
                'size'             => 25,
                'description'      => 'Suite. Our largest room situated on the first floor at the front of the house. Features a superking bed, freestanding roll top bath and chandelier for the ultimate in luxury.',
                'long_description' => 'Room 3 Suite - 25m². Our largest room situated on the first floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32" lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-3/rroom3.webp'],
                    array_map(fn($i) => "/images/rooms/room-3/rroom3_{$i}.webp", range(1, 21))
                ),
            ],
            [
                'name'             => 'Room 4, Small Double',
                'size'             => 10,
                'description'      => 'Small Compact Double. Situated on the second floor at the rear of the house, this room is small but beautifully formed with ensuite wetroom and underfloor heating.',
                'long_description' => 'Room 4 Small Compact Double - 10m². This room is small but beautifully formed. Situated on the second floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-4/rroom4.webp'],
                    array_map(fn($i) => "/images/rooms/room-4/rroom4_{$i}.webp", range(1, 15))
                ),
            ],
            [
                'name'             => 'Room 5, Superior Double',
                'size'             => 16,
                'description'      => 'Superior Double/Twin. Situated on the second floor at the rear of the house, beautifully decorated with quality fixtures and fittings. Superking bed or 2 singles available.',
                'long_description' => 'Room 5 Superior Double/Twin - 16m². This room is situated on the second floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. Superking bed or 2 singles, egyptian cotton linen, 32" lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-5/rroom5.webp'],
                    array_map(fn($i) => "/images/rooms/room-5/rroom5_{$i}.webp", array_values(array_diff(range(1, 15), [4])))
                ),
            ],
            [
                'name'             => 'Room 6, Front Aspect Junior Suite',
                'size'             => 24,
                'description'      => 'Junior Suite. A beautiful room situated on the second floor at the front of the house featuring a superking bed, freestanding roll top bath and chandelier.',
                'long_description' => 'Room 6 Junior Suite - 24m². A beautiful room situated on the second floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32" lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-6/rroom6.webp'],
                    array_map(fn($i) => "/images/rooms/room-6/rroom6_{$i}.webp", range(1, 22))
                ),
            ],
            [
                'name'             => 'Room 7, Superior Double With Sofa',
                'size'             => 16,
                'description'      => 'Superior Double With Sofa. Situated on the third/top floor, sumptuously decorated with quality fixtures and fittings and a Kingsize bed.',
                'long_description' => 'Room 7 Superior Double With Sofa - 16m². This room is situated on the third/top floor and is sumptuously decorated with quality fixtures and fittings. Kingsize bed, egyptian cotton linen, 32" lcd tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-7/rroom7.webp'],
                    array_map(fn($i) => "/images/rooms/room-7/rroom7_{$i}.webp", range(1, 22))
                ),
            ],
            [
                'name'             => 'Room 8, Deluxe Double (Internal)',
                'size'             => 16,
                'description'      => 'Deluxe Double Room. Situated on the ground floor to the rear of the house, stylishly decorated with quality fixtures and fittings. Features a Superking bed and ensuite bathroom with bath.',
                'long_description' => 'Room 8 Deluxe Double Room - 16m². This room is situated on the ground floor to the rear of the house. Stylishly decorated with quality fixtures and fittings. Super comfy Superking bed, egyptian cotton linen, 42" lcd tv, wifi (high speed), ensuite bathroom with bath and underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => [
                    'ALL bedrooms Non Smoking', 'Bath Ensuite', 'Bath Tub', 'Bath/Shower',
                    'Bottled Water (Complimentary)', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'Designer Toiletries', 'Digital Television Channels', 'Duvet',
                    'Egyptian Cotton Linen', 'En Suite', 'Fridge', 'Full-Length Mirror', 'Hair Dryer In Room',
                    'Hairdryer', 'Heating Throughout Property', 'Ironing Facilities', 'Kettle',
                    'LCD/Plasma Television', 'Linen & Towels Supplied', 'Make Up Mirror', 'Private Bathroom',
                    'Rainfall Shower', 'Remote Control TV', 'Tea/Coffee', 'Television',
                    'WI-FI Internet Access', 'Wifi Free',
                ],
                'images' => array_merge(
                    ['/images/rooms/room-8/rroom8.webp'],
                    array_map(fn($i) => "/images/rooms/room-8/rroom8_{$i}.webp", range(1, 24))
                ),
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
