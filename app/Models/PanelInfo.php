<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PanelInfo extends Model
{
    use HasFactory;

    public const HEIGHT = 4;
    public const WIDTH = 4;
    public const MAX_PANELS = self::HEIGHT * self::WIDTH;

    public const SIZE_L = 2;
    public const SIZE_M_VAR = 3;
    public const SIZE_M_HOL = 4;
    public const SIZE_S = 5;

    /**
     * モデルのIDを自動増分するか.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * モデルにタイムスタンプを付けるか.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * モデルに関連付けるテーブル.
     *
     * @var string
     */
    protected $table = 't_user_panel_info';

    /**
     * 自動増分IDのデータ型.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * テーブルに関連付ける主キー
     *
     * @var array<string, string>
     */
    protected $primaryKey = ['user_id', 'anchor_num'];

    protected $guarded = [];

    public static function getPanelsExceptNull($id)
    {
        return PanelInfo::Join('m_panel', 't_user_panel_info.panel_name', '=', 'm_panel.panel_name')
            ->select('m_panel.panel_name', 'anchor_num', 'panel_size', 'content_link', 'content_image')
            ->where('user_id', $id)->get()->toArray();
    }

    public static function updatePanels($id, $panels)
    {
        DB::transaction(function () use ($id, $panels) {
            // テーブルの初期化
            PanelInfo::where('user_id', $id)->update(['panel_name' => null, 'panel_size' => null]);
            // テーブルの更新
            foreach ($panels as $panel) {
                PanelInfo::where(['user_id' => $id, 'anchor_num' => $panel['anchor_num']])
                    ->update(['panel_name' => $panel['panel_name'], 'panel_size' => $panel['panel_size']])
                ;
            }
        });
    }
}
