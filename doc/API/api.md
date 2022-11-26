# 概要

Laravel の内部 API の仕様です。

## ステータスコード

下記のコードを返却します。

| ステータスコード | 説明                                             |
| ---------------- | ------------------------------------------------ |
| 200              | リクエスト成功                                   |
| 201              | 登録成功                                         |
| 204              | リクエストに成功したが返却する body が存在しない |
| 400              | 不正なリクエストパラメータを指定している         |
| 401              | API アクセストークンが不正、または権限不正       |
| 404              | 存在しない URL にアクセス                        |
| 429              | リクエスト制限を超えている                       |
| 500              | 不明なエラー                                     |

# パネル

## パネル取得

この API は、ユーザが認証されている必要があります。

```
GET /api/panels
```

### Request

| クエリパラメータ | 内容                 | 必須 | デフォルト値 | 範囲 |
| ---------------- | -------------------- | ---- | ------------ | ---- |
| preset           | プリセット ID を指定 |      |              |      |

プリセット ID が`preset001`のパネルを取得するとき

```
GET /api/panels?preset=preset001
```

認証済ユーザのパネルを取得するとき

```
GET /api/panels
```

### Response

ステータスコードが`200`のとき

```
{
    "panel_name": string,
    "anchor_num": number,
    "panel_size": number,
    "content_link": string,
    "content_image": string
}[]
```

ステータスコードがそれ以外のとき

```
{
    "message": string
}
```

## パネル更新

この API は、ユーザが認証されている必要があります。

```
POST /api/panels
```

### Request

| パラメータ | 内容         | 必須 | デフォルト値 | 範囲 |
| ---------- | ------------ | ---- | ------------ | ---- |
| panel_name | パネル名     | ○    |              |      |
| anchor_num | アンカー番号 | ○    |              | 0~15 |
| panel_size | パネルサイズ | ○    |              | 2~5  |

```
{
    "panel_name" : string,
    "anchor_num" : number,
    "panel_size" : number
}[]
```

### Response

ステータスコードが`200`のとき、更新後のパネルを返す。

```
{
    "panel_name": string,
    "anchor_num": number,
    "panel_size": number,
    "content_link": string,
    "content_image": string
}[]
```

ステータスコードがそれ以外のとき

```
{
    "message": string
}
```
