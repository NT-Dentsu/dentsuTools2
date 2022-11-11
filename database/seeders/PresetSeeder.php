<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PresetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // presetに使うパネルデータの作成
        DB::table('m_panel')->insert([
            [
                'panel_name' => 'size L',
                'content_link' => '/app/kindle_copy',
                'content_image' => '/assets/images/image_panel_L.jpg',
            ],
            [
                'panel_name' => 'size M hol',
                'content_link' => '/app/kindle_copy',
                'content_image' => '/assets/images/image_panel_M_h.jpg',
            ],
            [
                'panel_name' => 'size M var',
                'content_link' => '/app/kindle_copy',
                'content_image' => '/assets/images/image_panel_M_v.jpg',
            ],
            [
                'panel_name' => 'size S',
                'content_link' => '/app/kindle_copy',
                'content_image' => '/assets/images/image_panel_S.jpg',
            ],
        ]);

        // preset001のデータを作成
        DB::table('t_user_panel_info')->insert([
            [
                'user_id' => 'preset001',
                'panel_name' => 'size M hol',
                'anchor_num' => 0,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 1,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size S',
                'anchor_num' => 2,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size M var',
                'anchor_num' => 3,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size L',
                'anchor_num' => 4,
                'panel_size' => 2,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 5,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size M var',
                'anchor_num' => 6,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 7,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 8,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 9,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 10,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size S',
                'anchor_num' => 11,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size S',
                'anchor_num' => 12,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size M hol',
                'anchor_num' => 13,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => null,
                'anchor_num' => 14,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset001',
                'panel_name' => 'size S',
                'anchor_num' => 15,
                'panel_size' => 5,
            ],
        ]);
        // preset002のデータを作成
        DB::table('t_user_panel_info')->insert([
            [
                'user_id' => 'preset002',
                'panel_name' => 'size S',
                'anchor_num' => 0,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size M hol',
                'anchor_num' => 1,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 2,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size S',
                'anchor_num' => 3,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size M var',
                'anchor_num' => 4,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size L',
                'anchor_num' => 5,
                'panel_size' => 2,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 6,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size M var',
                'anchor_num' => 7,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 8,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 9,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 10,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 11,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size S',
                'anchor_num' => 12,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size M hol',
                'anchor_num' => 13,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => null,
                'anchor_num' => 14,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset002',
                'panel_name' => 'size S',
                'anchor_num' => 15,
                'panel_size' => 5,
            ],
        ]);
        // preset003のデータを作成
        DB::table('t_user_panel_info')->insert([
            [
                'user_id' => 'preset003',
                'panel_name' => 'size M var',
                'anchor_num' => 0,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size S',
                'anchor_num' => 1,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size L',
                'anchor_num' => 2,
                'panel_size' => 2,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 3,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 4,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size S',
                'anchor_num' => 5,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 6,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 7,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size L',
                'anchor_num' => 8,
                'panel_size' => 2,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 9,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size S',
                'anchor_num' => 10,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size M var',
                'anchor_num' => 11,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 12,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 13,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => 'size S',
                'anchor_num' => 14,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset003',
                'panel_name' => null,
                'anchor_num' => 15,
                'panel_size' => null,
            ],
        ]);
        // preset004のデータを作成
        DB::table('t_user_panel_info')->insert([
            [
                'user_id' => 'preset004',
                'panel_name' => 'size L',
                'anchor_num' => 0,
                'panel_size' => 2,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 1,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size M hol',
                'anchor_num' => 2,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 3,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 4,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 5,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size S',
                'anchor_num' => 6,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size M var',
                'anchor_num' => 7,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size M var',
                'anchor_num' => 8,
                'panel_size' => 3,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size S',
                'anchor_num' => 9,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size S',
                'anchor_num' => 10,
                'panel_size' => 5,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 11,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 12,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size M hol',
                'anchor_num' => 13,
                'panel_size' => 4,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => null,
                'anchor_num' => 14,
                'panel_size' => null,
            ],
            [
                'user_id' => 'preset004',
                'panel_name' => 'size S',
                'anchor_num' => 15,
                'panel_size' => 5,
            ],
        ]);
    }
}
