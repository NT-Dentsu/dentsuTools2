<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
// 実際には、vendor/laravel/ui/auth-backend/AuthenticatesUsers.php
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     * 使用するミドルウェアの指定.
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    // AuthenticatesUsers::username のオーバライド
    public function username()
    {
        return 'user_id';
    }

    public function signup(Request $request)
    {
        $validated = $request->validate([
            'id' => ['required', 'string', 'between:6,20', 'regex:/^[0-9a-zA-Z\-]+$/', 'not_regex:/^preset.*$/', 'unique:m_user,user_id'],
            'password' => ['required', 'string', 'between:6,20', 'regex:/^[0-9a-zA-Z\-]+$/', 'not_regex:/^preset.*$/'],
        ]);

        User::create(['user_id' => $validated['id'], 'user_name' => $validated['id'], 'password_hash' => Hash::make($validated['password'])]);
        return response()->json(['message' => 'アカウント作成成功'], Response::HTTP_OK);
    }

    public function signin(Request $request)
    {
        $validated = $request->validate([
            'id' => ['required', 'string', 'between:6,20', 'regex:/^[0-9a-zA-Z\-]+$/', 'not_regex:/^preset.*$/'],
            'password' => ['required', 'string', 'between:6,20', 'regex:/^[0-9a-zA-Z\-]+$/', 'not_regex:/^preset.*$/'],
        ]);

        // attemptの'password'はattempの中で'password_hash'に置き換わる
        if (Auth::attempt(['user_id' => $validated['id'], 'password' => $validated['password']])) {
            $request->session()->regenerate();
            return response()->json(['message' => 'ログイン成功'], Response::HTTP_OK);
        }
        return response()->json(['message' => 'ログイン失敗'], Response::HTTP_UNAUTHORIZED);
    }

    public function signout(Request $request)
    {
        Auth::logout();
        return response()->json(['message' => 'ログアウト成功'], Response::HTTP_OK);
    }

    public function authcheck(Request $request)
    {
        if ($request->user()) {
            return response()->json(['message' => 'Authenticated.'], Response::HTTP_OK);
        }
        return response()->json(['message' => 'Unauhthenticated.'], Response::HTTP_UNAUTHORIZED);
    }
}
