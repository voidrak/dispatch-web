<?php

use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

// Route::get('send-email', [EmailController::class, "sendEmail"]);
Route::post('contact', [EmailController::class, "sendContactEmail"])->name("contact");
