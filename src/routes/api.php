<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\WordController;
use App\Http\Controllers\Api\CategoryController;

Route::apiResource('words', WordController::class);
Route::apiResource('categories', CategoryController::class);