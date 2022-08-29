<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'            =>  $this->id,
            'first_name'    =>  $this->first_name,
            'last_name'     =>  $this->last_name,
            'time'          =>  $this->created_at->diffForHumans(),
            'email'         =>  $this->email,
            'phone'         =>  $this->phone,
            'address'       =>  $this->address,
            'city'          =>  $this->city,
            'region'        =>  $this->region,
            'country'       =>  $this->country,
            'postal_code'   =>  $this->postal_code,
            'info'          =>  $this->info
        ];
    }
}
