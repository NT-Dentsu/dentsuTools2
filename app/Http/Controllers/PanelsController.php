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
        return response()->json(['message' => 'Hello.'], Response::HTTP_OK);
    }
}
