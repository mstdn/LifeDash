<?php

namespace App\Providers;

use App\Models\Team;
use App\Policies\ContactPolicy;
use App\Policies\NotesPolicy;
use App\Policies\TaskPolicy;
use App\Policies\TeamPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Team::class => TeamPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Gate::define('delete-note', [NotesPolicy::class, 'destroy']);
        Gate::define('edit-note', [NotesPolicy::class, 'update']);
        Gate::define('delete-task', [TaskPolicy::class, 'destroy']);
        Gate::define('edit-task', [TaskPolicy::class, 'update']);
        Gate::define('delete-contact', [ContactPolicy::class, 'destroy']);
        Gate::define('edit-contact', [ContactPolicy::class, 'update']);
    }
}
