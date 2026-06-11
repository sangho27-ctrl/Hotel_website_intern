<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;

// Public room listing
Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/available', [RoomController::class, 'available']);
Route::get('/rooms/{id}', [RoomController::class, 'show']);

// Public booking
Route::post('/bookings', [BookingController::class, 'store']);

// Auth
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected admin routes
Route::middleware('auth:api')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);

    Route::get('/admin/rooms', [RoomController::class, 'index']);
    Route::get('/admin/media', [MediaController::class, 'index']);
    Route::post('/admin/media', [MediaController::class, 'store']);
    Route::delete('/admin/media/{id}', [MediaController::class, 'destroy']);
    Route::post('/admin/rooms', [RoomController::class, 'store']);
    Route::put('/admin/rooms/{id}', [RoomController::class, 'update']);
    Route::delete('/admin/rooms/{id}', [RoomController::class, 'destroy']);

    Route::get('/admin/bookings', [BookingController::class, 'index']);
    Route::put('/admin/bookings/{id}', [BookingController::class, 'update']);
});
