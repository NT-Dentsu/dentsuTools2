<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    // タイムスタンプのカラム名
    public const CREATED_AT = 'insert_time';
    public const UPDATED_AT = 'updated_time';

    /**
     * モデルのIDを自動増分するか.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * モデルに関連付けるテーブル.
     *
     * @var string
     */
    protected $table = 'm_user';

    /**
     * テーブルに関連付ける主キー
     *
     * @var string
     */
    protected $primaryKey = 'user_id';

    /**
     * 自動増分IDのデータ型.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'user_name',
        'password_hash',
    ];

    public function getAuthPassword()
    {
        return $this->password_hash;
    }

    public static function createAccount($id, $password)
    {
        // Userクラスのインスタンスを返す
        return DB::transaction(function () use ($id, $password) {
            $PRESETID = 'preset001'; // よくない
            $user = User::create(['user_id' => $id, 'user_name' => $id, 'password_hash' => Hash::make($password)]);

            // プリセットのデータをユーザのレコードに挿入
            $presetData = PanelInfo::where('user_id', $PRESETID)->get()->toArray();

            for ($i = 0; $i < count($presetData); ++$i) {
                $presetData[$i]['user_id'] = $id;
            }
            PanelInfo::create($presetData);

            return $user;
        });
    }
}
