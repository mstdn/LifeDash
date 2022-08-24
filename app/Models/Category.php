<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function notes() 
    {
        return $this->hasMany(Note::class);
    }

    public function tasks() 
    {
        return $this->hasMany(Task::class);
    }

}
