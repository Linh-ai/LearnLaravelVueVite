<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    //

    function index()
    {
        // return inertia('Index/Index');
        return Inertia::render('Index/Index', [
            'message' => 'Hi, iam here!',
        ]);
    }

    function show() 
    {
        return inertia('Index/show');
    }
}
