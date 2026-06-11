<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->string('ftb_booking_ref')->nullable()->unique()->after('notes');
            $table->string('source')->default('direct')->after('ftb_booking_ref'); // direct | freetobook
        });

        Schema::table('rooms', function (Blueprint $table) {
            $table->string('ftb_room_ref')->nullable()->after('amenities');
        });
    }

    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn(['ftb_booking_ref', 'source']);
        });

        Schema::table('rooms', function (Blueprint $table) {
            $table->dropColumn('ftb_room_ref');
        });
    }
};
