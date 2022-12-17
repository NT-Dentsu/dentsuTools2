<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
