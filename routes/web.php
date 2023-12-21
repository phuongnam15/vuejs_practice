<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('admin')->group(function(){
    Route::get("/users", function(){
        return view('app');
    });
    Route::get("/roles", function(){
        return view('app');
    });
    Route::get("/settings", function(){
        return view('app');
    });
});
