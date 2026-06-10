<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

// Public room listing
Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/{id}', [RoomController::class, 'show']);

// Auth
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected admin routes
Route::middleware('auth:api')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);

    Route::get('/admin/rooms', [RoomController::class, 'index']);
    Route::post('/admin/rooms', [RoomController::class, 'store']);
    Route::put('/admin/rooms/{id}', [RoomController::class, 'update']);
    Route::delete('/admin/rooms/{id}', [RoomController::class, 'destroy']);
});
