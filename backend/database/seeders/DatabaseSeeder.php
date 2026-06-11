<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed rooms
        $this->call(RoomSeeder::class);

        // Seed default Admin User if not exists
        User::firstOrCreate(
            ['email' => 'admin@brightoninn.com'],
            [
                'name' => 'Admin User',
                'password' => bcrypt('admin123'), // Default password
            ]
        );
    }
}
