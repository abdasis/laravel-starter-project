<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('name', 'asc')->paginate(request()->get('per_page') ?? 10);
        return Inertia::render('Users/Index',[
            'users' => new UserCollection($users)
        ]);
    }
}
