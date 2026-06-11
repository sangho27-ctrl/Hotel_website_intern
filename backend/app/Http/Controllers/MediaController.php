<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Http\Resources\MediaResource;
use App\Services\MediaService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\JsonResponse;

class MediaController extends Controller
{
    protected MediaService $mediaService;

    public function __construct(MediaService $mediaService)
    {
        $this->mediaService = $mediaService;
    }

    public function index(): AnonymousResourceCollection
    {
        $media = $this->mediaService->getAllMedia();
        return MediaResource::collection($media);
    }

    public function store(StoreMediaRequest $request): JsonResponse
    {
        $media = $this->mediaService->uploadMedia($request->file('file'));
        return (new MediaResource($media))
            ->response()
            ->setStatusCode(201);
    }

    public function destroy(int $id): JsonResponse
    {
        $media = $this->mediaService->getMediaById($id);
        $this->mediaService->deleteMedia($media);
        return response()->json(null, 204);
    }
}
