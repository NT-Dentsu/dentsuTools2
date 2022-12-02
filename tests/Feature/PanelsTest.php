<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

/**
 * @internal
 *
 * @coversNothing
 */
class PanelsTest extends TestCase
{
    // テストの後にデータベースをリセット
    use RefreshDatabase;

    private $expectedPreset001 = [
        [
            'panel_name' => 'size M hol',
            'anchor_num' => 0,
            'panel_size' => 4,
            'content_link' => '/app/kindle_copy',
            'content_image' => '/assets/images/image_panel_M_h.jpg',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 2,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M var',
            'anchor_num' => 3,
            'panel_size' => 3,
            'content_image' => '/assets/images/image_panel_M_v.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size L',
            'anchor_num' => 4,
            'panel_size' => 2,
            'content_image' => '/assets/images/image_panel_L.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M var',
            'anchor_num' => 6,
            'panel_size' => 3,
            'content_image' => '/assets/images/image_panel_M_v.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 11,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 12,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M hol',
            'anchor_num' => 13,
            'panel_size' => 4,
            'content_image' => '/assets/images/image_panel_M_h.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 15,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
    ];

    private $expectedPreset002 = [
        [
            'panel_name' => 'size S',
            'anchor_num' => 0,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M hol',
            'anchor_num' => 1,
            'panel_size' => 4,
            'content_image' => '/assets/images/image_panel_M_h.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 3,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M var',
            'anchor_num' => 4,
            'panel_size' => 3,
            'content_image' => '/assets/images/image_panel_M_v.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size L',
            'anchor_num' => 5,
            'panel_size' => 2,
            'content_image' => '/assets/images/image_panel_L.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M var',
            'anchor_num' => 7,
            'panel_size' => 3,
            'content_image' => '/assets/images/image_panel_M_v.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 12,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size M hol',
            'anchor_num' => 13,
            'panel_size' => 4,
            'content_image' => '/assets/images/image_panel_M_h.jpg',
            'content_link' => '/app/kindle_copy',
        ],
        [
            'panel_name' => 'size S',
            'anchor_num' => 15,
            'panel_size' => 5,
            'content_image' => '/assets/images/image_panel_S.jpg',
            'content_link' => '/app/kindle_copy',
        ],
    ];

    // シーダの実行
    public function setUp(): void
    {
        parent::setUp();

        $this->seed('DatabaseSeeder');
    }

    public function testGetUserPanels()
    {
        $user = User::createAccount('sample001', 'password001');

        $response = $this->getJson('/api/panels');
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);

        $response = $this->actingAs($user)->getJson('/api/panels?preset=');
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response = $this->actingAs($user)->getJson('/api/panels');
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedPreset001)
        ;

        // バグの温床になりかねないけどヨシ！
        $response = $this->actingAs($user)->getJson('/api/panels?presetid=preset001');
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedPreset001)
        ;
    }

    public function testGetPresetPanels()
    {
        $user = User::createAccount('sample002', 'password002');

        $response = $this->actingAs($user)->getJson('/api/panels?preset=preset001');
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedPreset001)
        ;

        $response = $this->actingAs($user)->getJson('/api/panels?preset=preset002&test=aaaa');
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedPreset002)
        ;

        $response = $this->actingAs($user)->getJson('/api/panels?preset=aiueo');
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function testUpdatePanels()
    {
        $user = User::createAccount('sample003', 'password003');
        $response = $this->actingAs($user)->getJson('/api/panels');
        $response->assertStatus(Response::HTTP_OK);
    }
}
