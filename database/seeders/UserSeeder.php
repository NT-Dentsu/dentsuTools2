<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::createAccount('helloworld', 'helloworld');
        User::createAccount('test-user', 'test-password');
    }
}
