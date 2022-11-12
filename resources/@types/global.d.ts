/**
 * 作成者：NumLock
 * 作成日：2022/11/12
 * 更新日：
 * 概要：グローバル変数を定義
 */

// import firebase from 'firebase/app'; // 例
import usePanelInfo from '../hooks/PanelInfo';

declare global {
    type Window = {
        // firebaseApp: firebase.app.App//例
        // この中に好きに定義する

        // パネル配置を保持する
        panelInfo: usePanelInfo[];

        // customize_panel.jsで使用する変数を設定
        pdata: usePanelInfo[];
        // データベースから受け取ったパネル情報をpdataIndexに代入
        pdataIndex: number[];

        // プリセットを保持する
        preset001: usePanelInfo[];
        preset002: usePanelInfo[];
        preset003: usePanelInfo[];
        preset004: usePanelInfo[];

        // パネルマスタ情報を保持する
        panelMaster: usePanelInfo[];
    };
}
