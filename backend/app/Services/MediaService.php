<?php

namespace App\Services;

use App\Models\Media;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MediaService
{
    public function getAllMedia(): Collection
    {
        return Media::latest()->get();
    }

    public function getMediaById(int $id): Media
    {
        return Media::findOrFail($id);
    }

    public function uploadMedia(UploadedFile $file): Media
    {
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path     = $file->storeAs('public/media', $filename);
        $url      = Storage::url($path);

        return Media::create([
            'filename'      => $filename,
            'original_name' => $file->getClientOriginalName(),
            'mime_type'     => $file->getMimeType(),
            'size'          => $file->getSize(),
            'path'          => $path,
            'url'           => $url,
        ]);
    }

    public function deleteMedia(Media $media): void
    {
        Storage::delete($media->path);
        $media->delete();
    }
}
