<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'            =>  $this->id,
            'note'          =>  $this->description,
            'time'          =>  $this->created_at->diffForHumans(),
            'category'      =>  $this->category->name,
            'category_id'   =>  $this->category->id
        ];
    }
}
