<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;
use App\Http\Resources\RoomResource;
use App\Services\RoomService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\JsonResponse;

class RoomController extends Controller
{
    protected RoomService $roomService;

    public function __construct(RoomService $roomService)
    {
        $this->roomService = $roomService;
    }

    public function index(): AnonymousResourceCollection
    {
        $rooms = $this->roomService->getAllRooms();
        return RoomResource::collection($rooms);
    }

    public function show(int $id): RoomResource
    {
        $room = $this->roomService->getRoomById($id);
        return new RoomResource($room);
    }

    public function store(StoreRoomRequest $request): JsonResponse
    {
        $room = $this->roomService->createRoom($request->validated());
        return (new RoomResource($room))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateRoomRequest $request, int $id): RoomResource
    {
        $room = $this->roomService->getRoomById($id);
        $updatedRoom = $this->roomService->updateRoom($room, $request->validated());
        return new RoomResource($updatedRoom);
    }

    public function destroy(int $id): JsonResponse
    {
        $room = $this->roomService->getRoomById($id);
        $this->roomService->deleteRoom($room);
        return response()->json(null, 204);
    }
}
