<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Booking;
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
            'guests'    => 'nullable|integer|min:1',
        ]);

        $checkIn  = $request->check_in;
        $checkOut = $request->check_out;
        $guests   = $request->guests ?? 1;

        $bookedRoomIds = Booking::where('status', '!=', 'cancelled')
            ->where('check_in', '<', $checkOut)
            ->where('check_out', '>', $checkIn)
            ->pluck('room_id');

        $rooms = Room::whereNotIn('id', $bookedRoomIds)->get();

        return response()->json($rooms);
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
