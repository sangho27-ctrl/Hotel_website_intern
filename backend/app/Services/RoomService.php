<?php

namespace App\Services;

use App\Models\Room;
use Illuminate\Database\Eloquent\Collection;

class RoomService
{
    public function getAllRooms(): Collection
    {
        return Room::all();
    }

    public function getRoomById(int $id): Room
    {
        return Room::findOrFail($id);
    }

    public function createRoom(array $data): Room
    {
        return Room::create($data);
    }

    public function updateRoom(Room $room, array $data): Room
    {
        $room->update($data);
        return $room;
    }

    public function deleteRoom(Room $room): void
    {
        $room->delete();
    }
}
