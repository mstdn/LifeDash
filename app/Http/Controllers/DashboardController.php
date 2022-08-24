<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function landing()
    {
        return Inertia::render('Landing');
    }

    public function index(Note $note)
    {
        return Inertia::render('Dashboard/Index', [
            'notes'     =>  Note::query()
                            ->where('user_id', auth()->user()->id)
                            ->latest()
                            ->paginate()
                            ->through(fn($note) => [
                                'id'    =>  $note->id,
                                'note'  =>  $note->description,
                                'time'  =>  $note->created_at->diffForHumans()
                            ]),
            'notescount'    =>  Note::query()
            ->where('user_id', auth()->user()->id)
            ->latest()
            ->count()
        ]);
    }
}
