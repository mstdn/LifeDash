<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Contact/Index', [
            'contacts' => Contact::where(function ($query) {
                $query->where('user_id', auth()->id());
            })
                ->latest()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('first_name', 'like', "%{$search}%")
                        ->orWhere('last_name', 'like', "%{$search}%");
                })
                ->paginate(16)
                ->withQueryString()
                ->through(fn ($contact) => [
                    'id'            =>  $contact->id,
                    'first_name'    =>  $contact->first_name,
                    'last_name'     =>  $contact->last_name,
                    'time'          =>  $contact->created_at->diffForHumans(),
                    'email'         =>  $contact->email,
                    'phone'         =>  $contact->phone,
                    'address'       =>  $contact->address,
                    'city'          =>  $contact->city,
                    'region'        =>  $contact->region,
                    'country'       =>  $contact->country,
                    'postal_code'   =>  $contact->postal_code,
                    'info'          =>  $contact->info
                ]),
            'filters' => $request->only(['search'])
        ]);
    }


    public function update(Contact $contact, Request $request)
    {
        if (!Gate::allows('edit-contact', $contact)) {
            abort(403);
        }

        $request->validate([
            'first_name' => 'required|string|min:1|max:500',
            'last_name' => 'required|string|min:1|max:500',
            'email' => ['nullable', 'max:50', 'email'],
            'phone' => ['nullable', 'max:50'],
            'address' => ['nullable', 'max:150'],
            'city' => ['nullable', 'max:50'],
            'region' => ['nullable', 'max:50'],
            'country' => ['nullable', 'max:2'],
            'postal_code' => ['nullable', 'max:25'],
            'info' => ['nullable', 'max:500'],
        ]);

        $contact->update([
            'first_name'    =>  $request->first_name,
            'last_name'     =>  $request->last_name,
            'email'         =>  $request->email,
            'phone'         =>  $request->phone,
            'address'       =>  $request->address,
            'city'          =>  $request->city,
            'region'        =>  $request->region,
            'country'       =>  $request->country,
            'postal_code'   =>  $request->postal_code,
            'info'          =>  $request->info
        ]);


        return Redirect::route('contacts');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['nullable', 'max:50', 'email'],
            'phone' => ['nullable', 'max:50'],
            'address' => ['nullable', 'max:150'],
            'city' => ['nullable', 'max:50'],
            'region' => ['nullable', 'max:50'],
            'country' => ['nullable', 'max:2'],
            'postal_code' => ['nullable', 'max:25'],
            'info' => ['nullable', 'max:500'],
        ]);

        Contact::create([
            'user_id'       =>  auth()->user()->id,
            'first_name'    =>  $request->first_name,
            'last_name'     =>  $request->last_name,
            'email'         =>  $request->email,
            'phone'         =>  $request->phone,
            'address'       =>  $request->address,
            'city'          =>  $request->city,
            'region'        =>  $request->region,
            'address'       =>  $request->city,
            'country'       =>  $request->country,
            'postal_code'   =>  $request->postal_code,
            'info'          =>  $request->info
        ]);

        return Redirect::route('contacts');
    }

    public function destroy(Contact $contact)
    {
        if (!Gate::allows('delete-contact', $contact)) {
            abort(403);
        }
        $contact->delete();
        return Redirect::route('contacts');
    }
}
