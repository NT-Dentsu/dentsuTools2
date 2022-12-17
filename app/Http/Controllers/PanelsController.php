<?php

namespace App\Http\Controllers;

use App\Models\PanelInfo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PanelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userId = $request->user()['user_id'];
        $queryParams = $request->query();

        $validated = $request->validate(
            ['preset' => ['filled', 'string', 'regex:/^preset.*$/', 'exists:t_user_panel_info,user_id']]
        );

        if (array_key_exists('preset', $validated)) {
            $userId = $validated['preset'];
        }

        $record = PanelInfo::Join('m_panel', 't_user_panel_info.panel_name', '=', 'm_panel.panel_name')
            ->select('m_panel.panel_name', 'anchor_num', 'panel_size', 'content_link', 'content_image')
            ->where('user_id', $userId)->get()->toArray();
        return response()->json(['panels' => $record], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId = $request->user()['user_id'];

        $validated = $request->validate(
            [
                'layout' => ['required', 'array'],
                'layout.*.panel_name' => ['required', 'string', 'exists:m_panel,panel_name'],
                'layout.*.anchor_num' => ['required', 'numeric', 'between:0,15'],
                'layout.*.panel_size' => ['required', 'numeric', 'between:2,5'],
            ]
        );

        // dump($validated);

        if (self::canAllocatePanels($validated['layout']) === false) {
            return response()->json(
                ['message' => 'パネルを割り当てることができませんでした。'],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        // DB更新
        return response()->json(['message' => $request->name], Response::HTTP_OK);
    }

    // 指定したパネルが特定の位置にあるときにはみでていないかどうか
    private static function isContainPanelRange($panelBaseIndex, $panelSIZE)
    {
        if ($panelSIZE == PanelInfo::SIZE_L) {
            $panelIndexes = [
                [$panelBaseIndex['height'], $panelBaseIndex['width']],
                [$panelBaseIndex['height'], $panelBaseIndex['width'] + 1],
                [$panelBaseIndex['height'] + 1, $panelBaseIndex['width']],
                [$panelBaseIndex['height'] + 1, $panelBaseIndex['width'] + 1],
            ];
        } elseif ($panelSIZE == PanelInfo::SIZE_M_VAR) {
            $panelIndexes = [
                [$panelBaseIndex['height'], $panelBaseIndex['width']],
                [$panelBaseIndex['height'] + 1, $panelBaseIndex['width']],
            ];
        } elseif ($panelSIZE == PanelInfo::SIZE_M_HOL) {
            $panelIndexes = [
                [$panelBaseIndex['height'], $panelBaseIndex['width']],
                [$panelBaseIndex['height'], $panelBaseIndex['width'] + 1],
            ];
        } elseif ($panelSIZE == PanelInfo::SIZE_S) {
            $panelIndexes = [
                [$panelBaseIndex['height'], $panelBaseIndex['width']],
            ];
        } else {
            return false;
        }

        // dump($panelIndexes);

        foreach ($panelIndexes as $panelIndex) {
            if ($panelIndex[0] < 0 || $panelIndex[0] > PanelInfo::HEIGHT - 1) {
                return false;
            }

            if ($panelIndex[1] < 0 || $panelIndex[1] > PanelInfo::WIDTH - 1) {
                return false;
            }
        }
        return true;
    }

    private static function canAllocatePanels($panels)
    {
        // 全体のパネルを表すHEIGHT*WIDTHの2次元配列を確保しnullで初期化
        $countPaintedPanels = array_map(function () {
            return array_fill(0, PanelInfo::WIDTH, null);
        }, array_fill(0, PanelInfo::HEIGHT, null));

        foreach ($panels as $panel) {
            $base_height = intdiv($panel['anchor_num'], PanelInfo::HEIGHT);
            $base_width = $panel['anchor_num'] % PanelInfo::HEIGHT;
            $base = ['height' => $base_height, 'width' => $base_width];

            if (!self::isContainPanelRange($base, $panel['panel_size'])) {
                return false;
            }

            if ($panel['panel_size'] == PanelInfo::SIZE_L) {
                /*
                    [base_h]    [base_w]    [base_h]    [base_w + 1]
                    [base_h + 1][base_w]    [base_h + 1][base_w + 1]
                 */
                ++$countPaintedPanels[$base['height']][$base['width']];
                ++$countPaintedPanels[$base['height']][$base['width'] + 1];
                ++$countPaintedPanels[$base['height'] + 1][$base['width']];
                ++$countPaintedPanels[$base['height'] + 1][$base['width'] + 1];
            } elseif ($panel['panel_size'] == PanelInfo::SIZE_M_VAR) {
                /*
                    [base_h]    [base_w]
                    [base_h + 1][base_w]
                 */
                ++$countPaintedPanels[$base['height']][$base['width']];
                ++$countPaintedPanels[$base['height'] + 1][$base['width']];
            } elseif ($panel['panel_size'] == PanelInfo::SIZE_M_HOL) {
                // [base_h][base_w]    [base_h][base_w + 1]
                ++$countPaintedPanels[$base['height']][$base['width']];
                ++$countPaintedPanels[$base['height']][$base['width'] + 1];
            } elseif ($panel['panel_size'] == PanelInfo::SIZE_S) {
                // [base_h][base_w]
                ++$countPaintedPanels[$base['height']][$base['width']];
            }
        }

        // dump($countPaintedPanels);

        // 重なっているパネルがあるか
        for ($i = 0; $i < count($countPaintedPanels); ++$i) {
            for ($j = 0; $j < count($countPaintedPanels[$i]); ++$j) {
                if ($countPaintedPanels[$i][$j] > 1) {
                    return false;
                }
            }
        }

        return true;
    }
}
