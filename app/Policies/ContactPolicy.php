<?php

namespace App\Policies;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContactPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Contact $contact)
    {
        return $user->id === $contact->user_id;
    }

    public function destroy(User $user, Contact $contact)
    {
        return $user->id === $contact->user_id;
    }
}
