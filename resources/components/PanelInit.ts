/**
 * 制作者：NumLock
 * 制作日：2022/10/01
 * 更新日：
 * パネル関連のデータ取得
 * home画面とcuntomize画面で利用
 */

import { useEffect, useState } from 'react';

// PanelInfoをimport
import usePanelInfo, { PanelInfoProps } from '../hooks/PanelInfo';

// ダミー関数用の値
const dummy: PanelInfoProps = {
    _panelName: 'test',
    _pos: 0,
    _size: 0,
    _imgLink: 'test',
    _toolLink: 'test',
};
// phpのapi完成するまでのダミー関数
const DummyGetUserPanels = () => {
    const array: PanelInfoProps[] = [];
    array.push(dummy);

    const status = 1;
    return { status, array };
};
const DummyGetPresetData = (presetId: string) => {
    console.log(presetId);

    const array: PanelInfoProps[] = [];
    array.push(dummy);

    const status = 2;
    return { status, array };
};

// データベースから現在のユーザのパネルデータを読み込み，表示用に成型して返り値に渡す
export const PanelInit = () => {
    // 取得したデータ格納用
    const [userPanelsData, setUserPanelData] = useState<{ status: number; array: PanelInfoProps[] }>({
        status: 0,
        array: [dummy],
    });

    // 同期処理?
    // 画面読み込み時に実行
    // 実は要らないかもしれない
    useEffect(() => {
        console.log('useEffect');
        setUserPanelData(DummyGetUserPanels);
    }, []);

    // hooksがcallbackの中で使えないので仕方なく...
    const panelInfo = [];
    for (let i = 0; i < userPanelsData.array.length; i += 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        panelInfo.push(usePanelInfo(userPanelsData.array[i]));
    }

    // 返り値はPanelInfoの配列のつもり
    return panelInfo;
};

// データベースから指定したプリセットパネルデータを読み込んみ，表示用に成型して返り値に渡す
export const PanelPreset = (presetId: string) => {
    // 取得したデータ格納用
    const [userPanelsData, setUserPanelData] = useState<{ status: number; array: PanelInfoProps[] }>({
        status: 0,
        array: [dummy],
    });

    // 同期処理?
    // presetId変更時に実行
    // 実は要らないかもしれない
    useEffect(() => {
        console.log('useEffect');
        setUserPanelData(DummyGetPresetData(presetId));
    }, [presetId]);

    // hooksがcallbackの中で使えないので仕方なく...
    const panelInfo = [];
    for (let i = 0; i < userPanelsData.array.length; i += 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        panelInfo.push(usePanelInfo(userPanelsData.array[i]));
    }

    // 返り値はPanelInfoの配列のつもり
    return panelInfo;
};
