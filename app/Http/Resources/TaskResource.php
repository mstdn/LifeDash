<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'            =>  $this->id,
            'task'          =>  $this->task,
            'completed'     =>  $this->completed,
            'category'      =>  $this->category->name,
            'category_id'   =>  $this->category->id,
            'time'          =>  $this->created_at->diffForHumans(),
        ];
    }
}
