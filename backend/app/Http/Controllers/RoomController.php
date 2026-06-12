<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Booking;
use App\Services\FreeToBookService;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        return response()->json(Room::all());
    }

    public function available(Request $request)
    {
        $request->validate([
            'check_in'  => 'required|date|after_or_equal:today',
            'check_out' => 'required|date|after:check_in',
            'adults'    => 'nullable|integer|min:1|max:20',
            'children'  => 'nullable|integer|min:0|max:10',
            'guests'    => 'nullable|integer|min:1', // legacy support
        ]);

        $checkIn  = $request->check_in;
        $checkOut = $request->check_out;
        $adults   = (int) ($request->adults   ?? $request->guests ?? 1);
        $children = (int) ($request->children ?? 0);
        $roomId   = $request->room_id; // optional: pre-selected room to check

        // Try FreeToBook API first
        $ftb = app(FreeToBookService::class);
        $ftbRooms = $ftb->getAvailableRooms($checkIn, $checkOut, $adults, $children);

        if ($ftbRooms !== null) {
            $available   = collect($ftbRooms);
            $suggestions = collect();

            if ($roomId) {
                $wanted = $available->firstWhere('id', $roomId);
                if (!$wanted) {
                    // Requested room not available — find a reference price from local DB
                    $ref = Room::find($roomId);
                    if ($ref) {
                        $suggestions = $available->filter(
                            fn($r) => abs(($r['price'] ?? 0) - $ref->price) / max($ref->price, 1) <= 0.30
                        )->values();
                        $available = $available->reject(fn($r) => $suggestions->contains('id', $r['id']))->values();
                    }
                }
            }

            return response()->json([
                'available'   => $available->values(),
                'suggestions' => $suggestions->values(),
                'source'      => 'freetobook',
            ]);
        }

        // Fallback: check local DB bookings
        $bookedRoomIds = Booking::where('status', '!=', 'cancelled')
            ->where('check_in', '<', $checkOut)
            ->where('check_out', '>', $checkIn)
            ->pluck('room_id');

        $available = Room::whereNotIn('id', $bookedRoomIds)->get();
        $suggestions = collect();

        if ($roomId && $bookedRoomIds->contains($roomId)) {
            $ref = Room::find($roomId);
            if ($ref) {
                $suggestions = $available->filter(
                    fn($r) => abs($r->price - $ref->price) / max($ref->price, 1) <= 0.30
                )->values();
                $available = $available->reject(fn($r) => $suggestions->contains('id', $r->id))->values();
            }
        }

        return response()->json([
            'available'   => $available->values(),
            'suggestions' => $suggestions->values(),
            'source'      => 'local',
        ]);
    }

    public function show(int $id)
    {
        $room = Room::findOrFail($id);
        return response()->json($room);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'             => 'required|string|max:255',
            'size'             => 'nullable|integer|min:1',
            'description'      => 'nullable|string',
            'long_description' => 'nullable|string',
            'price'            => 'required|integer|min:0',
            'amenities'        => 'nullable|array',
            'images'           => 'nullable|array',
        ]);

        $room = Room::create($validated);
        return response()->json($room, 201);
    }

    public function update(Request $request, int $id)
    {
        $room = Room::findOrFail($id);

        $validated = $request->validate([
            'name'             => 'sometimes|required|string|max:255',
            'size'             => 'nullable|integer|min:1',
            'description'      => 'nullable|string',
            'long_description' => 'nullable|string',
            'price'            => 'sometimes|required|integer|min:0',
            'amenities'        => 'nullable|array',
            'images'           => 'nullable|array',
        ]);

        $room->update($validated);
        return response()->json($room);
    }

    public function destroy(int $id)
    {
        $room = Room::findOrFail($id);
        $room->delete();
        return response()->json(null, 204);
    }
}
