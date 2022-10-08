/**
 * 制作者：NumLock
 * 制作日：2022/09/10
 * 更新日：2022/10/01
 * パネル関連のあれこれをカスタムhooksで実装
 */

// stateフックをimport
import { useState } from 'react';

// PanelInfoの引数の型
export type PanelInfoProps = {
    _panelName: string;
    _pos: number;
    _size: number;
    _imgLink: string;
    _toolLink: string;
};
// Dataの返り値の型定義
type DataReturn = {
    panel_name: string;
    anchor_num: number;
    panel_size: number;
};
// setContentsの引数の型定義
type SetContentProps = {
    cPanelName: string;
    contentLink: string;
    contentImage: string;
};

const usePanelInfo = ({
    // 引数
    _panelName,
    _pos,
    _size,
    _imgLink,
    _toolLink,
}: PanelInfoProps): {
    // 返り値
    className: string;
    gridSize: string;
    toolLink: string;
    imageLink: string;
    InitState: () => void;
    Data: () => DataReturn;
    // eslint-disable-next-line no-unused-vars
    SetContent: ({ cPanelName, contentLink, contentImage }: SetContentProps) => void;
} => {
    // メンバ？
    const [panelName, setPanelName] = useState(_panelName);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const [pos, setPos] = useState(_pos);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [size, setSize] = useState(_size); // 符号なし。5：小(1/8サイズ)、4：中(1/4サイズ(横))、3：中(1/4サイズ(縦))、2：大(1/2サイズ)
    const [imageLink, setImageLink] = useState(_imgLink);
    const [toolLink, setToolLink] = useState(_toolLink);
    // classNameとgiidSize
    const [className, setClassName] = useState('');
    const [gridSize, setGridSize] = useState('');

    // 初期化用
    function InitState(): void {
        // 位置，サイズ，クラス名のパラメータ設定
        // grid-column: 左 / 右;
        // grid-row: 上 / 下;
        // grid-row: A / B; grid-column: C / D; → grid-area: A / C / B / D;
        const row = Math.floor(pos / 4) + 1;
        const col = (pos % 4) + 1;
        if (size === 2) {
            // 大サイズ
            setClassName('PanelL');
            setGridSize(`${row} / ${col} / ${row + 2} / ${col + 2}`);
        } else if (size === 3) {
            setClassName('PanelM var');
            setGridSize(`${row} / ${col} / ${row + 2} / ${col + 1}`);
        } else if (size === 4) {
            setClassName('PanelM hol');
            setGridSize(`${row} / ${col} / ${row + 1} / ${col + 2}`);
        } else if (size === 5) {
            setClassName('PanelS');
            setGridSize(`${row} / ${col} / ${row + 1} / ${col + 1}`);
        }
    }

    // パネルデータを渡す
    // 渡す形式：連想配列
    // 連想配列の形式(要素は順不同){"panel_name" : <String>, "anchor_num" : <int>, "panel_size" : <int>}
    function Data(): DataReturn {
        return { panel_name: panelName, anchor_num: pos, panel_size: size };
    }

    // コンテンツ情報更新用
    function SetContent({ cPanelName, contentLink, contentImage }: SetContentProps): void {
        // console.log(content);
        setPanelName(cPanelName);
        setToolLink(contentLink);
        setImageLink(contentImage);
        // console.log(content.content_image);
    }

    // オブジェクトを返すように
    return { className, gridSize, toolLink, imageLink, InitState, Data, SetContent };
};

export default usePanelInfo;
