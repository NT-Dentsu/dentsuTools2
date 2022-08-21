<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
    // /**
    //  * The attributes that should be hidden for serialization.
    //  *
    //  * @var array<int, string>
    //  */
    // protected $hidden = [
    //     'password',
    //     'remember_token',
    // ];

    // /**
    //  * The attributes that should be cast.
    //  *
    //  * @var array<string, string>
    //  */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];
}
