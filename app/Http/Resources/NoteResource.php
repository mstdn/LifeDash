<?php

namespace App\Http\Resources;

use App\Models\Note;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'notes' => Note::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('description', 'like', "%{$search}%");
                })
                ->paginate(20)
                ->withQueryString()
                ->through(fn ($note) => [
                    'id'            =>  $note->id,
                    'note'          =>  $note->description,
                    'time'          =>  $note->created_at->diffForHumans(),
                    'category'      =>  $note->category->name,
                    'category_id'   =>  $note->category->id
                ]),
                'filters' => $request->only(['search'])
            ];
    }
}
