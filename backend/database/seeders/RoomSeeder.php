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
                'name'             => 'Deluxe Double Room',
                'size'             => 32,
                'description'      => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.',
                'long_description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.',
                'price'            => 185,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'LCD/Plasma Television', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Complimentary Toiletries', 'Digital Television Channels', 'Flat Screen TV', 'Fridge', 'Linen & Towels Supplied', 'Private Bathroom', 'Work Desk'],
                'images'           => ['rooms/room1/room1.avif', 'rooms/room1/room1_1.avif', 'rooms/room1/room1_2.avif', 'rooms/room1/room1_3.avif', 'rooms/room1/room1_4.avif', 'rooms/room1/room1_5.avif', 'rooms/room1/room1_6.avif', 'rooms/room1/room1_7.avif', 'rooms/room1/room1_8.avif', 'rooms/room1/room1_9.avif'],
            ],
            [
                'name'             => 'Four Poster Room',
                'size'             => 22,
                'description'      => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.',
                'long_description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.',
                'price'            => 130,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Digital Television Channels', 'Egyptian Cotton Linen', 'En Suite', 'Flat Screen TV', 'Four Poster Bed', 'Fridge', 'Private Bathroom', 'Shower EnSuite', 'Tea/Coffee', 'Television', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open'],
                'images'           => ['rooms/room2/room2.avif', 'rooms/room2/room2_1.avif', 'rooms/room2/room2_2.avif', 'rooms/room2/room2_3.avif', 'rooms/room2/room2_4.avif', 'rooms/room2/room2_5.avif', 'rooms/room2/room2_6.avif', 'rooms/room2/room2_7.avif', 'rooms/room2/room2_8.avif', 'rooms/room2/room2_9.avif', 'rooms/room2/room2_10.avif', 'rooms/room2/room2_11.avif', 'rooms/room2/room2_12.avif'],
            ],
            [
                'name'             => 'Standard Double',
                'size'             => 18,
                'description'      => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'long_description' => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'price'            => 110,
                'amenities'        => ['Central Heating', 'Daily Housekeeping', 'Egyptian Cotton Linen', 'Flat Screen TV', 'Fridge', 'Kettle', 'Private Bathroom', 'Shower EnSuite', 'Tea/Coffee', 'Television', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open', 'Work Desk'],
                'images'           => ['rooms/room3/room3.avif', 'rooms/room3/room3_1.avif', 'rooms/room3/room3_2.avif', 'rooms/room3/room3_3.avif', 'rooms/room3/room3_4.avif', 'rooms/room3/room3_5.avif', 'rooms/room3/room3_6.avif', 'rooms/room3/room3_7.avif', 'rooms/room3/room3_8.avif', 'rooms/room3/room3_9.avif', 'rooms/room3/room3_10.avif', 'rooms/room3/room3_11.avif', 'rooms/room3/room3_12.avif', 'rooms/room3/room3_13.avif', 'rooms/room3/room3_14.avif', 'rooms/room3/room3_15.avif', 'rooms/room3/room3_16.avif', 'rooms/room3/room3_17.avif', 'rooms/room3/room3_18.avif'],
            ],
            [
                'name'             => 'Deluxe Balcony Room',
                'size'             => 16,
                'description'      => 'This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.',
                'long_description' => 'This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.',
                'price'            => 95,
                'amenities'        => ['Non Smoking', 'Balcony', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Flat Screen TV', 'Fridge', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'Television', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open'],
                'images'           => ['rooms/room4/room4.avif', 'rooms/room4/room4_1.avif', 'rooms/room4/room4_2.avif', 'rooms/room4/room4_3.avif', 'rooms/room4/room4_4.avif', 'rooms/room4/room4_5.avif', 'rooms/room4/room4_6.avif', 'rooms/room4/room4_7.avif', 'rooms/room4/room4_8.avif', 'rooms/room4/room4_9.avif', 'rooms/room4/room4_10.avif', 'rooms/room4/room4_11.avif', 'rooms/room4/room4_12.avif', 'rooms/room4/room4_13.avif'],
            ],
            [
                'name'             => 'Standard Double',
                'size'             => 28,
                'description'      => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'long_description' => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'price'            => 165,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Digital Television Channels', 'Egyptian Cotton Linen', 'Flat Screen TV', 'Fridge', 'Kettle', 'Linen & Towels Supplied', 'Shower EnSuite', 'Tea/Coffee', 'Wash Hand Basin EnSuite', 'Wifi Free', 'Windows open', 'Work Desk with Lamp'],
                'images'           => ['rooms/room5/room5.avif', 'rooms/room5/room5_1.avif', 'rooms/room5/room5_2.avif', 'rooms/room5/room5_3.avif', 'rooms/room5/room5_4.avif', 'rooms/room5/room5_5.avif', 'rooms/room5/room5_6.avif', 'rooms/room5/room5_7.avif', 'rooms/room5/room5_8.avif', 'rooms/room5/room5_9.avif', 'rooms/room5/room5_10.avif', 'rooms/room5/room5_11.avif', 'rooms/room5/room5_12.avif', 'rooms/room5/room5_13.avif', 'rooms/room5/room5_14.avif', 'rooms/room5/room5_15.avif'],
            ],
            [
                'name'             => 'Deluxe Double',
                'size'             => 20,
                'description'      => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'long_description' => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'price'            => 120,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Kettle', 'Linen & Towels Supplied', 'Private Bathroom', 'Remote Control TV', 'Shower EnSuite', 'Tea/Coffee', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open', 'Work Desk'],
                'images'           => ['rooms/room6/room6.avif', 'rooms/room6/room6_1.avif', 'rooms/room6/room6_2.avif', 'rooms/room6/room6_3.avif', 'rooms/room6/room6_4.avif', 'rooms/room6/room6_5.avif', 'rooms/room6/room6_6.avif', 'rooms/room6/room6_7.avif', 'rooms/room6/room6_8.avif', 'rooms/room6/room6_9.avif', 'rooms/room6/room6_10.avif', 'rooms/room6/room6_11.avif', 'rooms/room6/room6_12.avif', 'rooms/room6/room6_13.avif', 'rooms/room6/room6_14.avif', 'rooms/room6/room6_15.avif', 'rooms/room6/room6_16.avif', 'rooms/room6/room6_17.avif', 'rooms/room6/room6_18.avif', 'rooms/room6/room6_19.avif', 'rooms/room6/room6_20.avif'],
            ],
            [
                'name'             => 'Small Single',
                'size'             => 24,
                'description'      => 'A TV, DVD player and tea/coffee making facilities are featured in this room.',
                'long_description' => 'A TV, DVD player and tea/coffee making facilities are featured in this room.',
                'price'            => 140,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Desk Chair', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open', 'Work Desk'],
                'images'           => ['rooms/room7/room7.avif', 'rooms/room7/room7_1.avif', 'rooms/room7/room7_2.avif', 'rooms/room7/room7_3.avif', 'rooms/room7/room7_4.avif', 'rooms/room7/room7_5.avif'],
            ],
            [
                'name'             => 'Deluxe Double',
                'size'             => 26,
                'description'      => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'long_description' => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'price'            => 155,
                'amenities'        => ['Non Smoking', 'Broadband/High Speed Internet Access', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Kettle', 'Private Bathroom', 'Shower EnSuite', 'Tea/Coffee', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open', 'Work Desk'],
                'images'           => ['rooms/room8/room8.avif', 'rooms/room8/room8_1.avif', 'rooms/room8/room8_2.avif', 'rooms/room8/room8_3.avif', 'rooms/room8/room8_4.avif', 'rooms/room8/room8_5.avif', 'rooms/room8/room8_6.avif', 'rooms/room8/room8_7.avif', 'rooms/room8/room8_8.avif', 'rooms/room8/room8_9.avif', 'rooms/room8/room8_10.avif', 'rooms/room8/room8_11.avif'],
            ],
            [
                'name'             => 'Split Level Double',
                'size'             => 30,
                'description'      => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'long_description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'price'            => 175,
                'amenities'        => ['Non Smoking', 'Central Heating', 'Complimentary Toiletries', 'Daily Housekeeping', 'Designer Toiletries', 'Egyptian Cotton Linen', 'Electric Shaver Point', 'En Suite', 'Flat Screen TV', 'Fridge', 'Linen & Towels Supplied', 'Television', 'TV In Room', 'Wash Hand Basin EnSuite', 'WC EnSuite', 'Wifi Free', 'Windows open', 'Work Desk'],
                'images'           => ['rooms/room9/room9.avif', 'rooms/room9/room9_1.avif', 'rooms/room9/room9_2.avif', 'rooms/room9/room9_3.avif', 'rooms/room9/room9_4.avif', 'rooms/room9/room9_5.avif', 'rooms/room9/room9_6.avif', 'rooms/room9/room9_7.avif', 'rooms/room9/room9_8.avif', 'rooms/room9/room9_9.avif', 'rooms/room9/room9_10.avif', 'rooms/room9/room9_11.avif', 'rooms/room9/room9_12.avif', 'rooms/room9/room9_13.avif', 'rooms/room9/room9_14.avif'],
            ],
        ];

        foreach ($rooms as $room) {
            Room::create($room);
        }
    }
}
