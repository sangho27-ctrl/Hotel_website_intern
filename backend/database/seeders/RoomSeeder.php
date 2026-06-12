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
            [
                'name'             => 'Deluxe Ground Floor King Room',
                'size'             => 18,
                'description'      => 'This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable.',
                'long_description' => 'Room 0 Deluxe Ground Floor King Room - 18m2. This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable. It comes with the following amenities. Super comfy Kingsize bed, egyptian cotton linen, 32" smart led tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => ['Alarm Clock', 'ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'CD Player', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Duvet', 'DVD Library', 'DVD Player', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Full-Length Mirror', 'Hair Dryer In Room', 'Hairdryer', 'Heating Throughout Property', 'Internet via TV', 'Ironing Facilities', 'Kettle', 'King Size Bed', 'Linen & Towels Supplied', 'Make Up Mirror', 'Private Bathroom', 'Radio', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'Television', 'WC EnSuite', 'WI-FI Internet Access', 'Wifi Free', 'Windows open'],
                'images'           => ['rooms/room0/room0.avif','rooms/room0/room0_1.avif','rooms/room0/room0_10.avif','rooms/room0/room0_11.avif','rooms/room0/room0_12.avif','rooms/room0/room0_13.avif','rooms/room0/room0_14.avif','rooms/room0/room0_15.avif','rooms/room0/room0_16.avif','rooms/room0/room0_17.avif','rooms/room0/room0_18.avif','rooms/room0/room0_19.avif','rooms/room0/room0_2.avif','rooms/room0/room0_20.avif','rooms/room0/room0_21.avif','rooms/room0/room0_22.avif','rooms/room0/room0_23.avif','rooms/room0/room0_24.avif','rooms/room0/room0_25.avif','rooms/room0/room0_26.avif','rooms/room0/room0_27.avif','rooms/room0/room0_28.avif','rooms/room0/room0_29.avif','rooms/room0/room0_3.avif','rooms/room0/room0_30.avif','rooms/room0/room0_31.avif','rooms/room0/room0_4.avif','rooms/room0/room0_5.avif','rooms/room0/room0_6.avif','rooms/room0/room0_7.avif','rooms/room0/room0_8.avif','rooms/room0/room0_9.avif'],
            ],
            [
                'name'             => 'Luxurious Small Double',
                'size'             => 10,
                'description'      => 'This room is small but beautifully formed. Situated on the first floor at the rear of the house, it comes with a super comfy double bed, ensuite wetroom with underfloor heating, and all the boutique touches you\'d expect.',
                'long_description' => 'Room 1 Luxurious Small Double - 10m2. This room is small but beautifully formed. Situated on the first floor at the rear of the house, it comes with a super comfy double bed, ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge, 32" smart LED TV, wifi (high speed), egyptian cotton linen.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'Television', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room1/rroom1.avif','rooms/room1/rroom1_1.avif','rooms/room1/rroom1_10.avif','rooms/room1/rroom1_11.avif','rooms/room1/rroom1_12.avif','rooms/room1/rroom1_13.avif','rooms/room1/rroom1_14.avif','rooms/room1/rroom1_15.avif','rooms/room1/rroom1_2.avif','rooms/room1/rroom1_3.avif','rooms/room1/rroom1_4.avif','rooms/room1/rroom1_5.avif','rooms/room1/rroom1_6.avif','rooms/room1/rroom1_7.avif','rooms/room1/rroom1_8.avif','rooms/room1/rroom1_9.avif'],
            ],
            [
                'name'             => 'Rear Aspect Luxury Double',
                'size'             => 14,
                'description'      => 'Situated on the first floor at the rear of the house, this beautifully decorated luxury double room has views over the quiet rear garden.',
                'long_description' => 'Room 2 Rear Aspect Luxury Double - 14m2. Situated on the first floor at the rear of the house, this beautifully decorated luxury double room has views over the quiet rear garden. Includes super comfy double bed, egyptian cotton linen, 32" smart LED TV, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room2/rroom2.avif','rooms/room2/rroom2_10.avif','rooms/room2/rroom2_2.avif','rooms/room2/rroom2_3.avif','rooms/room2/rroom2_4.avif','rooms/room2/rroom2_5.avif','rooms/room2/rroom2_6.avif','rooms/room2/rroom2_7.avif','rooms/room2/rroom2_8.avif','rooms/room2/rroom2_9.avif'],
            ],
            [
                'name'             => 'Front Aspect Luxury Suite',
                'size'             => 20,
                'description'      => 'This stunning suite is situated on the first floor at the front of the house and boasts the largest floor area of all our rooms with beautiful sea views.',
                'long_description' => 'Room 3 Front Aspect Luxury Suite - 20m2. This stunning suite is situated on the first floor at the front of the house and boasts the largest floor area of all our rooms with beautiful sea views. Includes super king size bed, egyptian cotton linen, 40" smart LED TV, wifi (high speed), luxury ensuite bathroom with underfloor heating, free designer toiletries, roll top bath, separate power shower, GHD hair straighteners and hairdryer, seating area, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'King Size Bed', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Roll Top Bath', 'Sea View', 'Seating Area', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room3/rroom3.avif','rooms/room3/rroom3_1.avif','rooms/room3/rroom3_10.avif','rooms/room3/rroom3_11.avif','rooms/room3/rroom3_12.avif','rooms/room3/rroom3_13.avif','rooms/room3/rroom3_14.avif','rooms/room3/rroom3_15.avif','rooms/room3/rroom3_16.avif','rooms/room3/rroom3_17.avif','rooms/room3/rroom3_18.avif','rooms/room3/rroom3_19.avif','rooms/room3/rroom3_2.avif','rooms/room3/rroom3_20.avif','rooms/room3/rroom3_21.avif','rooms/room3/rroom3_3.avif','rooms/room3/rroom3_4.avif','rooms/room3/rroom3_5.avif','rooms/room3/rroom3_6.avif','rooms/room3/rroom3_7.avif','rooms/room3/rroom3_8.avif','rooms/room3/rroom3_9.avif'],
            ],
            [
                'name'             => 'Small Double',
                'size'             => 12,
                'description'      => 'A cosy and comfortable small double room, ideal for a short break. Features ensuite bathroom, smart TV, and high-speed wifi.',
                'long_description' => 'Room 4 Small Double - 12m2. A cosy and comfortable small double room situated on the second floor. Ideal for a short break in Brighton. Features double bed, egyptian cotton linen, 32" smart LED TV, wifi (high speed), ensuite shower room, free designer toiletries, hairdryer, mini fridge, tea and coffee facilities.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV', 'Fridge', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room4/rroom4.avif','rooms/room4/rroom4_1.avif','rooms/room4/rroom4_10.avif','rooms/room4/rroom4_11.avif','rooms/room4/rroom4_12.avif','rooms/room4/rroom4_13.avif','rooms/room4/rroom4_14.avif','rooms/room4/rroom4_15.avif','rooms/room4/rroom4_2.avif','rooms/room4/rroom4_3.avif','rooms/room4/rroom4_4.avif','rooms/room4/rroom4_5.avif','rooms/room4/rroom4_6.avif','rooms/room4/rroom4_7.avif','rooms/room4/rroom4_8.avif','rooms/room4/rroom4_9.avif'],
            ],
            [
                'name'             => 'Superior Double',
                'size'             => 16,
                'description'      => 'A beautifully appointed superior double room with all the boutique touches Brighton Inn is known for. Featuring a comfortable double bed and stylish ensuite.',
                'long_description' => 'Room 5 Superior Double - 16m2. A beautifully appointed superior double room with all the boutique touches Brighton Inn is known for. Features super comfy double bed, egyptian cotton linen, 32" smart LED TV, wifi (high speed), ensuite wetroom, free designer toiletries, Grohe rain shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room5/rroom5.avif','rooms/room5/rroom5_1.avif','rooms/room5/rroom5_10.avif','rooms/room5/rroom5_11.avif','rooms/room5/rroom5_12.avif','rooms/room5/rroom5_13.avif','rooms/room5/rroom5_14.avif','rooms/room5/rroom5_15.avif','rooms/room5/rroom5_2.avif','rooms/room5/rroom5_3.avif','rooms/room5/rroom5_5.avif','rooms/room5/rroom5_6.avif','rooms/room5/rroom5_7.avif','rooms/room5/rroom5_8.avif','rooms/room5/rroom5_9.avif'],
            ],
            [
                'name'             => 'Front Aspect Junior Suite',
                'size'             => 18,
                'description'      => 'This charming junior suite is situated at the front of the house with lovely views. Spacious and well-appointed with boutique furnishings.',
                'long_description' => 'Room 6 Front Aspect Junior Suite - 18m2. This charming junior suite is situated at the front of the house with lovely views. Spacious and well-appointed with boutique furnishings. Features king size bed, egyptian cotton linen, 40" smart LED TV, wifi (high speed), ensuite bathroom with underfloor heating, free designer toiletries, Grohe rain shower, GHD hair straighteners and hairdryer, seating area, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'King Size Bed', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Seating Area', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room6/rroom6.avif','rooms/room6/rroom6_1.avif','rooms/room6/rroom6_10.avif','rooms/room6/rroom6_11.avif','rooms/room6/rroom6_12.avif','rooms/room6/rroom6_13.avif','rooms/room6/rroom6_14.avif','rooms/room6/rroom6_15.avif','rooms/room6/rroom6_16.avif','rooms/room6/rroom6_17.avif','rooms/room6/rroom6_18.avif','rooms/room6/rroom6_19.avif','rooms/room6/rroom6_2.avif','rooms/room6/rroom6_20.avif','rooms/room6/rroom6_21.avif','rooms/room6/rroom6_22.avif','rooms/room6/rroom6_3.avif','rooms/room6/rroom6_4.avif','rooms/room6/rroom6_5.avif','rooms/room6/rroom6_6.avif','rooms/room6/rroom6_7.avif','rooms/room6/rroom6_8.avif','rooms/room6/rroom6_9.avif'],
            ],
            [
                'name'             => 'Superior Double with Sofa',
                'size'             => 17,
                'description'      => 'A superior double room with the added comfort of a sofa. Perfect for those who want a little extra space to relax after a day exploring Brighton.',
                'long_description' => 'Room 7 Superior Double with Sofa - 17m2. A superior double room with the added comfort of a sofa. Perfect for those who want a little extra space to relax after a day exploring Brighton. Features super comfy double bed, sofa seating area, egyptian cotton linen, 32" smart LED TV, wifi (high speed), ensuite wetroom, free designer toiletries, Grohe rain shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Seating Area', 'Shower EnSuite', 'Sofa', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room7/rroom7.avif','rooms/room7/rroom7_1.avif','rooms/room7/rroom7_10.avif','rooms/room7/rroom7_11.avif','rooms/room7/rroom7_12.avif','rooms/room7/rroom7_13.avif','rooms/room7/rroom7_14.avif','rooms/room7/rroom7_15.avif','rooms/room7/rroom7_16.avif','rooms/room7/rroom7_17.avif','rooms/room7/rroom7_18.avif','rooms/room7/rroom7_19.avif','rooms/room7/rroom7_2.avif','rooms/room7/rroom7_20.avif','rooms/room7/rroom7_21.avif','rooms/room7/rroom7_22.avif','rooms/room7/rroom7_3.avif','rooms/room7/rroom7_4.avif','rooms/room7/rroom7_5.avif','rooms/room7/rroom7_6.avif','rooms/room7/rroom7_7.avif','rooms/room7/rroom7_8.avif'],
            ],
            [
                'name'             => 'Deluxe Double (Internal)',
                'size'             => 15,
                'description'      => 'A deluxe double room situated internally within the property. Beautifully decorated with all the high-end touches you\'d expect from Brighton Inn.',
                'long_description' => 'Room 8 Deluxe Double (Internal) - 15m2. A deluxe double room situated internally within the property. Beautifully decorated with all the high-end touches you\'d expect from Brighton Inn. Features super comfy double bed, egyptian cotton linen, 32" smart LED TV, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.',
                'price'            => 0,
                'amenities'        => ['ALL bedrooms Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Double Bed', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'GHD Straighteners', 'Hairdryer', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'WC EnSuite', 'Wifi Free'],
                'images'           => ['rooms/room8/rroom8.avif','rooms/room8/rroom8_1.avif','rooms/room8/rroom8_10.avif','rooms/room8/rroom8_11.avif','rooms/room8/rroom8_12.avif','rooms/room8/rroom8_13.avif','rooms/room8/rroom8_14.avif','rooms/room8/rroom8_15.avif','rooms/room8/rroom8_16.avif','rooms/room8/rroom8_17.avif','rooms/room8/rroom8_18.avif','rooms/room8/rroom8_19.avif','rooms/room8/rroom8_2.avif','rooms/room8/rroom8_20.avif','rooms/room8/rroom8_21.avif','rooms/room8/rroom8_22.avif','rooms/room8/rroom8_23.avif','rooms/room8/rroom8_24.avif','rooms/room8/rroom8_3.avif','rooms/room8/rroom8_4.avif','rooms/room8/rroom8_5.avif','rooms/room8/rroom8_6.avif','rooms/room8/rroom8_7.avif','rooms/room8/rroom8_8.avif','rooms/room8/rroom8_9.avif'],
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
