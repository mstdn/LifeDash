<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactResource;
use App\Http\Resources\NoteResource;
use App\Http\Resources\TaskResource;
use App\Models\Note;
use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function landing()
    {
        return Inertia::render('Landing');
    }

    public function index(Note $note, User $user)
    {
        return Inertia::render('Dashboard/Index', [
            'notes'     =>  NoteResource::collection(Note::query()
                ->where('user_id', auth()->user()->id)
                ->with('category')
                ->latest()
                ->paginate(20)),
                'notes.count' =>  auth()->user()->notes->count(),
            'tasks' => TaskResource::collection(Task::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->with('category')
                ->latest()
                ->paginate(20)),
                'tasks.count' =>  auth()->user()->tasks->count(),
            'contacts' => ContactResource::collection(Contact::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->latest()
                ->paginate(20)),
                'contacts.count' =>  auth()->user()->tasks->count(),
        ]);
    }
}
