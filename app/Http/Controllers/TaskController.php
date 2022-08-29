<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Task/Index', [
            'tasks' => TaskResource::collection(Task::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->with('category')
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('task', 'like', "%{$search}%");
                })
                ->paginate(40)
                ->withQueryString()),
            'filters' => $request->only(['search'])
        ]);
    }

    public function show(Task $task)
    {
    }

    public function completed(Request $request, Task $task)
    {
        if (!Gate::allows('edit-task', $task)) {
            abort(403);
        }
        
        $request->validate([
            'completed'     =>  'required|boolean'
        ]);

        $task->update([
            'completed'     =>  true
        ]);

        return Redirect::route('tasks');
    }

    public function uncompleted(Request $request, Task $task)
    {
        if (!Gate::allows('edit-task', $task)) {
            abort(403);
        }

        $request->validate([
            'completed'     =>  'required|boolean'
        ]);

        $task->update([
            'completed'     =>  false
        ]);

        return Redirect::route('tasks');
    }

    public function edit(Task $task)
    {
        return Inertia::render('Note/Index', [
            'task'  =>  $task
        ]);
    }

    public function update(Request $request, Task $task)
    {
        if (!Gate::allows('edit-task', $task)) {
            abort(403);
        }
        $request->validate([
            'task'         =>  'required|string|min:1|max:500',
            'completed'    =>  'nullable|boolean',
            'category'     =>  ['nullable', Rule::exists('categories', 'id')],
        ]);

        $task->update([
            'task'          =>  $request->task,
            'completed'     =>  $request->completed,
            'category_id'   =>  $request->category
        ]);

        return Redirect::route('tasks');
    }

    public function store(Request $request)
    {
        $request->validate([
            'task'         =>  'required|string|min:1|max:500',
            'completed'    =>  'nullable|boolean',
            'category'     =>  ['nullable', Rule::exists('categories', 'id')],
        ]);

        $request['user_id'] = auth()->id();

        Task::create([
            'user_id'       =>  auth()->id(),
            'task'          =>  $request->task,
            'completed'     =>  $request->completed,
            'category_id'   =>  $request->category
        ]);

        return Redirect::route('tasks');
    }

    public function destroy(Task $task)
    {
        if (!Gate::allows('delete-task', $task)) {
            abort(403);
        }
        $task->delete();
        return Redirect::route('tasks');
    }
}
