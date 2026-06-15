<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Room::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $rooms = [
            // Room 0
            [
                'name'             => 'Room 0, Deluxe King Room',
                'size'             => 18,
                'description'      => 'This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable.',
                'long_description' => 'Room 0 Deluxe Ground Floor King Room - 18m2. This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable. It comes with the following amenities. Super comfy Kingsize bed, egyptian cotton linen, 32" smart led tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access',
                    'CD Player', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping',
                    'Designer Toiletries', 'Duvet', 'DVD Library', 'DVD Player', 'Egyptian Cotton Linen',
                    'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Full-Length Mirror',
                    'Hair Dryer In Room', 'Hairdryer', 'Heating Throughout Property', 'Internet via TV',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Linen & Towels Supplied',
                    'Make Up Mirror', 'Private Bathroom', 'Radio', 'Remote Control TV', 'Shower EnSuite',
                    'Tea/Coffee', 'Television', 'WC EnSuite', 'WI-FI Internet Access', 'Wifi Free', 'Windows open',
                ],
                'images' => [
                    'rooms/room0/room0.avif','rooms/room0/room0_1.avif','rooms/room0/room0_2.avif',
                    'rooms/room0/room0_3.avif','rooms/room0/room0_4.avif','rooms/room0/room0_5.avif',
                    'rooms/room0/room0_6.avif','rooms/room0/room0_7.avif','rooms/room0/room0_8.avif',
                    'rooms/room0/room0_9.avif','rooms/room0/room0_10.avif','rooms/room0/room0_11.avif',
                    'rooms/room0/room0_12.avif','rooms/room0/room0_13.avif','rooms/room0/room0_14.avif',
                    'rooms/room0/room0_15.avif','rooms/room0/room0_16.avif','rooms/room0/room0_17.avif',
                    'rooms/room0/room0_18.avif','rooms/room0/room0_19.avif','rooms/room0/room0_20.avif',
                    'rooms/room0/room0_21.avif','rooms/room0/room0_22.avif','rooms/room0/room0_23.avif',
                    'rooms/room0/room0_24.avif','rooms/room0/room0_25.avif','rooms/room0/room0_26.avif',
                    'rooms/room0/room0_27.avif','rooms/room0/room0_28.avif','rooms/room0/room0_29.avif',
                    'rooms/room0/room0_30.avif','rooms/room0/room0_31.avif',
                ],
            ],
            // Room 1
            [
                'name'             => 'Room 1, Luxurious Small Double',
                'size'             => 10,
                'description'      => 'This room is small but beautifully formed. Situated on the first floor at the rear of the house.',
                'long_description' => 'Room 1 Compact Double - 10m2. This room is small but beautifully formed. Situated on the first floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'Designer Toiletries', 'Desk Chair', 'Duvet', 'DVD Player',
                    'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge',
                    'Full-Length Mirror', 'Hair Dryer In Room', 'Hairdryer', 'Heating Throughout Property',
                    'I-Pod docking station', 'Iron and Ironing Board on request', 'Ironing Facilities', 'Kettle',
                    'LCD/Plasma Television', 'Linen & Towels Supplied', 'Make Up Mirror', 'Private Bathroom',
                    'Remote Control TV', 'Shower EnSuite', 'Shower Room', 'Tea/Coffee', 'Television',
                    'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'WI-FI Internet Access',
                    'Wifi Free', 'Windows open', 'Work Desk', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room1/rroom1.avif','rooms/room1/rroom1_1.avif','rooms/room1/rroom1_2.avif',
                    'rooms/room1/rroom1_3.avif','rooms/room1/rroom1_4.avif','rooms/room1/rroom1_5.avif',
                    'rooms/room1/rroom1_6.avif','rooms/room1/rroom1_7.avif','rooms/room1/rroom1_8.avif',
                    'rooms/room1/rroom1_9.avif','rooms/room1/rroom1_10.avif','rooms/room1/rroom1_11.avif',
                    'rooms/room1/rroom1_12.avif','rooms/room1/rroom1_13.avif','rooms/room1/rroom1_14.avif',
                    'rooms/room1/rroom1_15.avif',
                ],
            ],
            // Room 2
            [
                'name'             => 'Room 2 Rear Aspect Luxury Double',
                'size'             => 16,
                'description'      => 'Situated on the first floor at the rear of the house, this beautifully decorated room offers a kingsize bed or 2 singles.',
                'long_description' => 'Room 2 Luxury Double/Twin - 16m2. This room is situated on the first floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. It comes with the following amenities. Kingsize bed or 2 singles, egyptian cotton linen, 32" lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'LCD/Plasma Television',
                    'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room2/rroom2.avif','rooms/room2/rroom2_2.avif','rooms/room2/rroom2_3.avif',
                    'rooms/room2/rroom2_4.avif','rooms/room2/rroom2_5.avif','rooms/room2/rroom2_6.avif',
                    'rooms/room2/rroom2_7.avif','rooms/room2/rroom2_8.avif','rooms/room2/rroom2_9.avif',
                    'rooms/room2/rroom2_10.avif',
                ],
            ],
            // Room 3
            [
                'name'             => 'Room 3 Front Aspect Luxury Suite',
                'size'             => 25,
                'description'      => 'Our largest room on the first floor at the front of the house, featuring a superking bed and freestanding roll top bath for the ultimate in luxury.',
                'long_description' => 'Room 3 Suite - 25m2. Our largest room situated on the first floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32" lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room3/rroom3.avif','rooms/room3/rroom3_1.avif','rooms/room3/rroom3_2.avif',
                    'rooms/room3/rroom3_3.avif','rooms/room3/rroom3_4.avif','rooms/room3/rroom3_5.avif',
                    'rooms/room3/rroom3_6.avif','rooms/room3/rroom3_7.avif','rooms/room3/rroom3_8.avif',
                    'rooms/room3/rroom3_9.avif','rooms/room3/rroom3_10.avif','rooms/room3/rroom3_11.avif',
                    'rooms/room3/rroom3_12.avif','rooms/room3/rroom3_13.avif','rooms/room3/rroom3_14.avif',
                    'rooms/room3/rroom3_15.avif','rooms/room3/rroom3_16.avif','rooms/room3/rroom3_17.avif',
                    'rooms/room3/rroom3_18.avif','rooms/room3/rroom3_19.avif','rooms/room3/rroom3_20.avif',
                    'rooms/room3/rroom3_21.avif',
                ],
            ],
            // Room 4
            [
                'name'             => 'Room 4 Small Double',
                'size'             => 10,
                'description'      => 'This room is small but beautifully formed. Situated on the second floor at the rear of the house.',
                'long_description' => 'Room 4 Small Compact Double - 10m2. This room is small but beautifully formed. Situated on the second floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room4/rroom4.avif','rooms/room4/rroom4_1.avif','rooms/room4/rroom4_2.avif',
                    'rooms/room4/rroom4_3.avif','rooms/room4/rroom4_4.avif','rooms/room4/rroom4_5.avif',
                    'rooms/room4/rroom4_6.avif','rooms/room4/rroom4_7.avif','rooms/room4/rroom4_8.avif',
                    'rooms/room4/rroom4_9.avif','rooms/room4/rroom4_10.avif','rooms/room4/rroom4_11.avif',
                    'rooms/room4/rroom4_12.avif','rooms/room4/rroom4_13.avif','rooms/room4/rroom4_14.avif',
                    'rooms/room4/rroom4_15.avif',
                ],
            ],
            // Room 5
            [
                'name'             => 'Room 5 Superior Double',
                'size'             => 16,
                'description'      => 'Situated on the second floor at the rear of the house, beautifully decorated with a superking bed or 2 singles.',
                'long_description' => 'Room 5 Superior Double/Twin - 16m2. This room is situated on the second floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. It comes with the following amenities. Superking bed or 2 singles, egyptian cotton linen, 32" lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room5/rroom5.avif','rooms/room5/rroom5_1.avif','rooms/room5/rroom5_2.avif',
                    'rooms/room5/rroom5_3.avif','rooms/room5/rroom5_5.avif','rooms/room5/rroom5_6.avif',
                    'rooms/room5/rroom5_7.avif','rooms/room5/rroom5_8.avif','rooms/room5/rroom5_9.avif',
                    'rooms/room5/rroom5_10.avif','rooms/room5/rroom5_11.avif','rooms/room5/rroom5_12.avif',
                    'rooms/room5/rroom5_13.avif','rooms/room5/rroom5_14.avif','rooms/room5/rroom5_15.avif',
                ],
            ],
            // Room 6
            [
                'name'             => 'Room 6 Front Aspect Junior Suite',
                'size'             => 24,
                'description'      => 'A beautiful room on the second floor at the front of the house, featuring a superking bed and freestanding roll top bath.',
                'long_description' => 'Room 6 Junior Suite - 24m2. A beautiful room situated on the second floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32" lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room6/rroom6.avif','rooms/room6/rroom6_1.avif','rooms/room6/rroom6_2.avif',
                    'rooms/room6/rroom6_3.avif','rooms/room6/rroom6_4.avif','rooms/room6/rroom6_5.avif',
                    'rooms/room6/rroom6_6.avif','rooms/room6/rroom6_7.avif','rooms/room6/rroom6_8.avif',
                    'rooms/room6/rroom6_9.avif','rooms/room6/rroom6_10.avif','rooms/room6/rroom6_11.avif',
                    'rooms/room6/rroom6_12.avif','rooms/room6/rroom6_13.avif','rooms/room6/rroom6_14.avif',
                    'rooms/room6/rroom6_15.avif','rooms/room6/rroom6_16.avif','rooms/room6/rroom6_17.avif',
                    'rooms/room6/rroom6_18.avif','rooms/room6/rroom6_19.avif','rooms/room6/rroom6_20.avif',
                    'rooms/room6/rroom6_21.avif','rooms/room6/rroom6_22.avif',
                ],
            ],
            // Room 7
            [
                'name'             => 'Room 7 Superior Double with Sofa',
                'size'             => 16,
                'description'      => 'Sumptuously decorated on the third/top floor with a kingsize bed and sofa, offering extra space to relax.',
                'long_description' => 'Room 7 Superior Double With Sofa - 16m2. This room is situated on the third/top floor and is sumptuously decorated with quality fixtures and fittings. It comes with the following amenities. Kingsize bed, egyptian cotton linen, 32" lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'amenities'        => [
                    'Alarm Clock', 'ALL bedrooms Non Smoking', 'Central Heating', 'Complimentary Toiletries',
                    'Daily Housekeeping', 'DVD Player', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV',
                    'Fridge', 'Full-Length Mirror', 'Heating Throughout Property', 'I-Pod docking station',
                    'Ironing Facilities', 'Kettle', 'King Size Bed', 'Wifi Free', 'GHD Irons & Hairdryer',
                ],
                'images' => [
                    'rooms/room7/rroom7.avif','rooms/room7/rroom7_1.avif','rooms/room7/rroom7_2.avif',
                    'rooms/room7/rroom7_3.avif','rooms/room7/rroom7_4.avif','rooms/room7/rroom7_5.avif',
                    'rooms/room7/rroom7_6.avif','rooms/room7/rroom7_7.avif','rooms/room7/rroom7_8.avif',
                    'rooms/room7/rroom7_9.avif','rooms/room7/rroom7_10.avif','rooms/room7/rroom7_11.avif',
                    'rooms/room7/rroom7_12.avif','rooms/room7/rroom7_13.avif','rooms/room7/rroom7_14.avif',
                    'rooms/room7/rroom7_15.avif','rooms/room7/rroom7_16.avif','rooms/room7/rroom7_17.avif',
                    'rooms/room7/rroom7_18.avif','rooms/room7/rroom7_19.avif','rooms/room7/rroom7_20.avif',
                    'rooms/room7/rroom7_21.avif','rooms/room7/rroom7_22.avif',
                ],
            ],
            // Room 8
            [
                'name'             => 'Room 8 Deluxe Double (Internal)',
                'size'             => 16,
                'description'      => 'Stylishly decorated on the ground floor to the rear of the house, featuring a superking bed and ensuite bathroom with bath.',
                'long_description' => 'Room 8 Deluxe double room - 16m2. This room is situated on the ground floor to the rear of the house. This room is stylishly decorated with quality fixtures and fittings. It comes with the following amenities. Super comfy Superking bed, egyptian cotton linen, 42" lcd tv, wifi(high speed), ensuite bathroom with bath and underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
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
                'images' => [
                    'rooms/room8/rroom8.avif','rooms/room8/rroom8_1.avif','rooms/room8/rroom8_2.avif',
                    'rooms/room8/rroom8_3.avif','rooms/room8/rroom8_4.avif','rooms/room8/rroom8_5.avif',
                    'rooms/room8/rroom8_6.avif','rooms/room8/rroom8_7.avif','rooms/room8/rroom8_8.avif',
                    'rooms/room8/rroom8_9.avif','rooms/room8/rroom8_10.avif','rooms/room8/rroom8_11.avif',
                    'rooms/room8/rroom8_12.avif','rooms/room8/rroom8_13.avif','rooms/room8/rroom8_14.avif',
                    'rooms/room8/rroom8_15.avif','rooms/room8/rroom8_16.avif','rooms/room8/rroom8_17.avif',
                    'rooms/room8/rroom8_18.avif','rooms/room8/rroom8_19.avif','rooms/room8/rroom8_20.avif',
                    'rooms/room8/rroom8_21.avif','rooms/room8/rroom8_22.avif','rooms/room8/rroom8_23.avif',
                    'rooms/room8/rroom8_24.avif',
                ],
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
