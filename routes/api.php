<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 認証していなくても利用できるAPIはここに書く
Route::post('/signup', [LoginController::class, 'signup']);
Route::post('/signin', [LoginController::class, 'signin']);
Route::post('/signout', [LoginController::class, 'signout']);
Route::get('/authcheck', [LoginController::class, 'authcheck']);
Route::group(['middleware' => 'auth:sanctum'], function () {
    // 認証後に限り利用できるAPIはここに書く
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
