<?php

namespace App\Policies;

use App\Models\Note;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NotesPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Note $note)
    {
        return $user->id === $note->user_id;
    }

    public function destroy(User $user, Note $note)
    {
        return $user->id === $note->user_id;
    }
}
