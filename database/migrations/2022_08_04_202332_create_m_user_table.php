<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('m_user', function (Blueprint $table) {
            $table->string('user_id', 20)->primary();
            $table->string('user_name', 40);
            $table->char('password_hash', 60);
            $table->text('user_icon')->nullable();
            $table->datetime('insert_time')->nullable();
            $table->datetime('updated_time')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('m_user');
    }
};
