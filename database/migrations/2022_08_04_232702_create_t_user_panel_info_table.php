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
        Schema::create('t_user_panel_info', function (Blueprint $table) {
            $table->string('user_id', 20);
            $table->string('panel_name', 100)->nullable();
            $table->smallInteger('anchor_num')->unsigned();
            $table->tinyInteger('panel_size')->nullable()->unsigned()->default(5);
            $table->primary(['user_id', 'anchor_num']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('t_user_panel_info');
    }
};
