<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function about()
    {
        return Inertia::render('About/About');
    }

    public function terms()
    {
        return Inertia::render('About/TermsOfService');
    }

    public function privacy()
    {
        return Inertia::render('About/PrivacyPolicy');
    }
}
