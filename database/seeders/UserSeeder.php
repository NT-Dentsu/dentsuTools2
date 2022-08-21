<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create(['user_id' => 'helloworld', 'user_name' => 'helloworld', 'password_hash' => Hash::make('helloworld')]);
        User::create(['user_id' => 'test-user', 'user_name' => 'test-user', 'password_hash' => Hash::make('test-password')]);
    }
}
