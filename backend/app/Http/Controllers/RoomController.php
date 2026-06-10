<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        return response()->json(Room::all());
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
