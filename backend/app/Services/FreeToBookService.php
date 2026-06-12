<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FreeToBookService
{
    private string $apiBase;
    private string $propertyId;
    private string $apiKey;

    public function __construct()
    {
        // Set these in your .env file:
        // FREETOBOOK_API_BASE=https://api.freetobook.com/v1
        // FREETOBOOK_PROPERTY_ID=your_property_id
        // FREETOBOOK_API_KEY=your_api_key
        $this->apiBase    = rtrim(config('services.freetobook.api_base', 'https://api.freetobook.com/v1'), '/');
        $this->propertyId = config('services.freetobook.property_id', '');
        $this->apiKey     = config('services.freetobook.api_key', '');
    }

    /**
     * Check room availability from FreeToBook API.
     *
     * Returns array of available room data, or null on failure (caller should fall back to local DB).
     *
     * @return array<int, array{id: int|string, name: string, price: int, ...}>|null
     */
    public function getAvailableRooms(string $checkIn, string $checkOut, int $adults = 1, int $children = 0): ?array
    {
        if (empty($this->propertyId) || empty($this->apiKey)) {
            return null; // not configured, use local DB
        }

        try {
            $response = Http::withToken($this->apiKey)
                ->timeout(8)
                ->get("{$this->apiBase}/properties/{$this->propertyId}/availability", [
                    'from'     => $checkIn,
                    'to'       => $checkOut,
                    'adults'   => $adults,
                    'children' => $children,
                ]);

            if (!$response->successful()) {
                Log::warning('FreeToBook availability check failed', [
                    'status' => $response->status(),
                    'body'   => $response->body(),
                ]);
                return null;
            }

            return $this->normalizeRooms($response->json());
        } catch (\Throwable $e) {
            Log::warning('FreeToBook API error: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Normalise FTB API response into the same shape as our local Room model.
     * Adjust the field mappings once you have the real API response structure.
     */
    private function normalizeRooms(mixed $data): array
    {
        $rooms = $data['rooms'] ?? $data['data'] ?? $data ?? [];

        return collect($rooms)->map(function ($room) {
            return [
                'id'          => $room['id']          ?? $room['room_id']    ?? null,
                'name'        => $room['name']         ?? $room['room_name']  ?? 'Room',
                'size'        => $room['size']         ?? $room['room_size']  ?? null,
                'price'       => (int) ($room['price'] ?? $room['rate']       ?? 0),
                'description' => $room['description']  ?? $room['summary']   ?? null,
                'amenities'   => $room['amenities']    ?? $room['features']   ?? [],
                'images'      => $room['images']       ?? $room['photos']     ?? [],
            ];
        })->values()->all();
    }
}
