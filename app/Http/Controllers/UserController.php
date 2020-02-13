<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    //

    public function index(){
      return user::all();
    }
    public function currentUser(){
      return Auth::user();
    }
    public function create(){

    }
    public function store(Request $request){

    }
    public function show($id){

    }
    public function destroy($id){

    }
}
