<?php

namespace App\Http\Controllers;

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
            'notes'     =>  Note::query()
                ->where('user_id', auth()->user()->id)
                ->latest()
                ->take(3)
                ->get()
                ->map(fn ($note) => [
                    'id'            =>  $note->id,
                    'note'          =>  $note->description,
                    'time'          =>  $note->created_at->diffForHumans(),
                    'category'      =>  $note->category->name,
                    'category_id'   =>  $note->category->id
                ]),
                'notes.count'        =>  auth()->user()->notes->count(),
            'tasks' => Task::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->latest()
                ->paginate(20)
                ->withQueryString()
                ->through(fn ($task) => [
                    'id'            =>  $task->id,
                    'task'          =>  $task->task,
                    'completed'     =>  $task->completed,
                    'time'          =>  $task->created_at->diffForHumans(),
                    'category'      =>  $task->category->name,
                    'category_id'   =>  $task->category->id
                ]),
            'contacts' => Contact::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->latest()
                ->paginate(20)
                ->withQueryString()
                ->through(fn ($contact) => [
                    'id'            =>  $contact->id,
                    'first_name'    =>  $contact->first_name,
                    'last_name'     =>  $contact->last_name,
                    'time'          =>  $contact->created_at->diffForHumans(),
                    'email'         =>  $contact->email,
                    'phone'         =>  $contact->phone,
                    'address'       =>  $contact->address,
                    'city'          =>  $contact->city,
                    'region'        =>  $contact->region,
                    'country'       =>  $contact->country,
                    'postal_code'   =>  $contact->postal_code,
                    'info'          =>  $contact->info
                ]),
        ]);
    }
}
