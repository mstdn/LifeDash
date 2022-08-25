<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;


Route::get('/', [DashboardController::class, 'landing'])->name('landing')->middleware('guest');
Route::get('/about', [AboutController::class, 'about'])->name('about')->middleware('guest');
Route::get('/terms', [AboutController::class, 'terms'])->name('terms')->middleware('guest');
Route::get('/privacy', [AboutController::class, 'privacy'])->name('privacy')->middleware('guest');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::group(['prefix' => 'notes'], function () {
        Route::get('/', [NoteController::class, 'index'])->name('notes');
        Route::post('/', [NoteController::class, 'store']);
        Route::get('/{note}/edit', [NoteController::class, 'edit']);
        Route::patch('/{note}/edit', [NoteController::class, 'update'])->name('note.edit');
        Route::delete('/{note}/delete', [NoteController::class, 'destroy'])->name('note.destroy');
    });
    Route::group(['prefix' => 'tasks'], function () {
        Route::get('/', [TaskController::class, 'index'])->name('tasks');
        Route::post('/', [TaskController::class, 'store']);
        Route::get('/{task}/edit', [TaskController::class, 'edit']);
        Route::patch('/{task}/completed', [TaskController::class, 'completed'])->name('task.completed');
        Route::patch('/{task}/uncompleted', [TaskController::class, 'uncompleted'])->name('task.uncompleted');
        Route::patch('/{task}/edit', [TaskController::class, 'update'])->name('task.edit');
        Route::delete('/{task}/delete', [TaskController::class, 'destroy'])->name('task.destroy');
    });
    Route::group(['prefix' => 'contacts'], function () {
        Route::get('/', [ContactController::class, 'index'])->name('contacts');
        Route::post('/', [ContactController::class, 'store']);
        Route::patch('/{contact}/edit', [ContactController::class, 'update'])->name('contact.edit');
        Route::delete('/{contact}/delete', [ContactController::class, 'destroy'])->name('contact.destroy');
    });
});
