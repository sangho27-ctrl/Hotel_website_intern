<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FreeToBookWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $payload = $request->all();

        Log::info('FreeToBook webhook received', $payload);

        $type = $payload['type'] ?? $payload['event'] ?? null;

        match ($type) {
            'booking.new', 'new_booking'       => $this->handleNewBooking($payload),
            'booking.cancelled', 'cancellation' => $this->handleCancellation($payload),
            'availability.update'               => $this->handleAvailability($payload),
            default => Log::warning('FreeToBook: unknown event type', ['type' => $type]),
        };

        return response()->json(['status' => 'ok']);
    }

    private function handleNewBooking(array $payload): void
    {
        $roomRef  = $payload['room_id'] ?? $payload['room_ref'] ?? null;
        $checkIn  = $payload['check_in'] ?? $payload['arrival'] ?? null;
        $checkOut = $payload['check_out'] ?? $payload['departure'] ?? null;
        $name     = $payload['guest_name'] ?? ($payload['firstname'] ?? '') . ' ' . ($payload['lastname'] ?? '');
        $email    = $payload['guest_email'] ?? $payload['email'] ?? null;

        if (!$checkIn || !$checkOut || !$email) {
            Log::warning('FreeToBook: missing required booking fields', $payload);
            return;
        }

        $room = $roomRef ? Room::where('ftb_room_ref', $roomRef)->first() : null;

        Booking::updateOrCreate(
            ['ftb_booking_ref' => $payload['booking_ref'] ?? $payload['id'] ?? null],
            [
                'room_id'   => $room?->id,
                'check_in'  => $checkIn,
                'check_out' => $checkOut,
                'name'      => trim($name) ?: 'FreeToBook Guest',
                'email'     => $email,
                'guests'    => $payload['guests'] ?? $payload['num_guests'] ?? 1,
                'notes'     => $payload['notes'] ?? $payload['special_requests'] ?? null,
                'status'    => 'confirmed',
                'source'    => 'freetobook',
            ]
        );
    }

    private function handleCancellation(array $payload): void
    {
        $ref = $payload['booking_ref'] ?? $payload['id'] ?? null;
        if (!$ref) return;

        Booking::where('ftb_booking_ref', $ref)->update(['status' => 'cancelled']);
    }

    private function handleAvailability(array $payload): void
    {
        // Availability updates from FreeToBook — log for now, extend when payload format is confirmed
        Log::info('FreeToBook availability update', $payload);
    }
}
