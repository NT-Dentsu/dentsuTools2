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
        'panels' => [
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
        ],
    ];

    private $expectedPreset002 = [
        'panels' => [
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
        ],
    ];

    private $expectedSimplePanels = [
        'panels' => [
            [
                'panel_name' => 'size S',
                'anchor_num' => 5,
                'panel_size' => 5,
                'content_image' => '/assets/images/image_panel_S.jpg',
                'content_link' => '/app/kindle_copy',
            ],
        ],
    ];

    private $preset002Panels = [
        'layout' => [
            [
                'panel_name' => 'size S',
                'anchor_num' => 0,
                'panel_size' => 5,
            ],
            [
                'panel_name' => 'size M hol',
                'anchor_num' => 1,
                'panel_size' => 4,
            ],
            [
                'panel_name' => 'size S',
                'anchor_num' => 3,
                'panel_size' => 5,
            ],
            [
                'panel_name' => 'size M var',
                'anchor_num' => 4,
                'panel_size' => 3,
            ],
            [
                'panel_name' => 'size L',
                'anchor_num' => 5,
                'panel_size' => 2,
            ],
            [
                'panel_name' => 'size M var',
                'anchor_num' => 7,
                'panel_size' => 3,
            ],
            [
                'panel_name' => 'size S',
                'anchor_num' => 12,
                'panel_size' => 5,
            ],
            [
                'panel_name' => 'size M hol',
                'anchor_num' => 13,
                'panel_size' => 4,
            ],
            [
                'panel_name' => 'size S',
                'anchor_num' => 15,
                'panel_size' => 5,
            ],
        ],
    ];

    private $simplePanels = [
        'layout' => [
            [
                'panel_name' => 'size S',
                'anchor_num' => 5,
                'panel_size' => 5,
            ],
        ],
    ];

    // 重なってしまうパネル
    private $superimposedPanels = [
        'layout' => [
            [
                'panel_name' => 'size M hol',
                'anchor_num' => 0,
                'panel_size' => 4,
            ],
            [
                'panel_name' => 'size L',
                'anchor_num' => 1,
                'panel_size' => 2,
            ],
        ],
    ];

    private $stickoutPanels1 = [
        'layout' => [
            [
                'panel_name' => 'size M hol',
                'anchor_num' => 3,
                'panel_size' => 4,
            ],
        ],
    ];

    private $stickoutPanels2 = [
        'layout' => [
            [
                'panel_name' => 'size L',
                'anchor_num' => 13,
                'panel_size' => 2,
            ],
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

        $response = $this->postJson('/api/panels');
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);

        // パネル更新が成功するケース1 preset002に更新
        $response = $this->actingAs($user)->postJson('/api/panels', $this->preset002Panels);
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedPreset002)
        ;

        // パネル更新が成功するケース2
        $response = $this->actingAs($user)->postJson('/api/panels', $this->simplePanels);
        $response
            ->assertStatus(Response::HTTP_OK)
            ->assertExactJson($this->expectedSimplePanels)
        ;

        //
        // 以下、エラー時のテスト
        //

        // アンカー番号が重複するケース
        $changedPreset002panels = $this->preset002Panels;
        $changedPreset002panels['layout'][1] = [
            'panel_name' => 'size M hol',
            'anchor_num' => 0,
            'panel_size' => 4,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $changedPreset002panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // Preset002Panelsを一部変更して，エラーが発生するようなケースをテスト
        $errorPreset002Panels = $this->preset002Panels;

        // nullが含まれるケース1
        $errorPreset002Panels['layout'][1] = [
            'panel_name' => null,
            'anchor_num' => 1,
            'panel_size' => null,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // nullが含まれるケース2
        $errorPreset002Panels['layout'][1] = [
            'panel_name' => 'size M hol',
            'anchor_num' => 1,
            'panel_size' => null,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // m_panelに存在しないpanel_nameが含まれるケース
        $errorPreset002Panels['layout'][1] = [
            'panel_name' => 'aaaaa',
            'anchor_num' => 1,
            'panel_size' => 3,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // anchor_numに範囲外の値が設定されているケース
        $errorPreset002Panels['layout'][1] = [
            'panel_name' => 'size M hol',
            'anchor_num' => 16,
            'panel_size' => 3,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // panel_sizeに範囲外の値が設定されているケース
        $errorPreset002Panels['layout'][1] = [
            'panel_name' => 'size M hol',
            'anchor_num' => 1,
            'panel_size' => 6,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // 割り当てができないケース1 重なる
        $response = $this->actingAs($user)->postJson('/api/panels', $this->superimposedPanels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // 割り当てができないケース2 重なる
        $errorPreset002Panels = $this->preset002Panels;
        $errorPreset002Panels['layout'][] = [
            'panel_name' => 'size S',
            'anchor_num' => 2,
            'panel_size' => 5,
        ];
        $response = $this->actingAs($user)->postJson('/api/panels', $errorPreset002Panels);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // 割り当てができないケース3 右側がはみでる
        $response = $this->actingAs($user)->postJson('/api/panels', $this->stickoutPanels1);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        // 割り当てができないケース3 下側がはみでる
        $response = $this->actingAs($user)->postJson('/api/panels', $this->stickoutPanels2);
        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
