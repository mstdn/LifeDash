<?php

namespace App\Http\Controllers;

use App\Http\Resources\NoteResource;
use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;

class NoteController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Note/Index', [
            'notes' => NoteResource::collection(Note::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->with('category')
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('description', 'like', "%{$search}%");
                })
                ->paginate(15)
                ->withQueryString()),
            'filters' => $request->only(['search'])
        ]);
    }

    public function show(Note $note)
    {
    }

    public function edit(Note $note)
    {
        return Inertia::render('Note/Index', [
            'note'  =>  $note
        ]);
    }

    public function update(Request $request, Note $note)
    {
        if (!Gate::allows('edit-note', $note)) {
            abort(403);
        }
        $notes = $request->validate([
            'note'         =>  'required|min:1|max:5000',
            'category'     =>  ['required', Rule::exists('categories', 'id')],
        ]);

        $notes['user_id'] = auth()->id();

        $note->update([
            'description'   =>  $request->note,
            'category_id'   =>  $request->category
        ]);

        return Redirect::route('notes');
    }

    public function store(Request $request)
    {

        $notes = $request->validate([
            'note'         =>  'required|min:1|max:5000',
            'category'     =>  ['required', Rule::exists('categories', 'id')],
        ]);

        $notes['user_id'] = auth()->id();

        $notes = Note::create([
            'user_id'       =>  auth()->id(),
            'description'   =>  $request->note,
            'category_id'   =>  $request->category
        ]);

        return Redirect::route('notes');
    }

    // Delete item
    public function destroy(Note $note)
    {
        if (!Gate::allows('delete-note', $note)) {
            abort(403);
        }
        $note->delete();
        return Redirect::route('notes');
    }
}
