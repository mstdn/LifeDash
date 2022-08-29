<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'            =>  $this->id,
            'name'          =>  $this->name,
            'email'         =>  $this->email,
            'created_at'    =>  $this->created_at,
            'updated_at'    =>  $this->updated_at,
            'notes'         =>  NoteResource::collection($this->notes),
            'tasks'         =>  TaskResource::collection($this->tasks),
            'contacts'      =>  ContactResource::collection($this->contacts)
        ];
    }
}
