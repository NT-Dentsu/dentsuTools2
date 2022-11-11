/**
 * 制作者：NumLock
 * 制作日：2022/09/10
 * 更新日：2022/10/01
 * panelの追加，変更など
 */

import React, { Fragment } from 'react';
// import usePanelInfo from './PanelInfo';
import * as GridLayout from '../css/GridLayout';

// Infoの型宣言
type Info = Array<{
    className: string;
    gridSize: string;
    toolLink: string;
    imageLink: string;
}>;

// containerを取得
// const cont = document.getElementById(GridLayout.Container)!;

// containerの子要素を更新する
const ContainerUpdate = (info: Info, flag: boolean) => {
    // サイズ調整とか
    const panelAdjust = (
        <>
            {/* グリッドのサイズ調整用 */}
            <GridLayout.PanelWrap area="1 / 1" name="1" />
            <GridLayout.PanelWrap area="1 / 2" name="2" />
            <GridLayout.PanelWrap area="1 / 3" name="3" />
            <GridLayout.PanelWrap area="1 / 4" name="4" />
            <GridLayout.PanelWrap area="2 / 1" name="5" />
            <GridLayout.PanelWrap area="2 / 2" name="6" />
            <GridLayout.PanelWrap area="2 / 3" name="7" />
            <GridLayout.PanelWrap area="2 / 4" name="8" />
            <GridLayout.PanelWrap area="3 / 1" name="9" />
            <GridLayout.PanelWrap area="3 / 2" name="10" />
            <GridLayout.PanelWrap area="3 / 3" name="11" />
            <GridLayout.PanelWrap area="3 / 4" name="12" />
            <GridLayout.PanelWrap area="4 / 1" name="13" />
            <GridLayout.PanelWrap area="4 / 2" name="14" />
            <GridLayout.PanelWrap area="4 / 3" name="15" />
            <GridLayout.PanelWrap area="4 / 4" name="16" />
            {/* ここにパネルが追加される */}
        </>
    );

    // フラグによってコンテンツリンクの有無を変更

    // map使用
    // eslint-disable-next-line react/destructuring-assignment
    const panel = info.map((data) => (
        <div
            className={data.className}
            // 三項演算子
            style={flag ? { gridArea: data.gridSize } : { gridArea: data.gridSize, zIndex: 5 }}
        >
            {/* 三項演算子 */}
            {flag ? (
                <a href={data.toolLink}>
                    <img src={data.imageLink} alt="" />
                </a>
            ) : (
                <img src={data.imageLink} alt="" />
            )}
        </div>
    ));

    // 子要素追加(できてたらいいなぁ)
    // ReactDOM.createPortal(panel, cont);
    return (
        <GridLayout.Container>
            {panelAdjust}
            {panel}
        </GridLayout.Container>
    );
};

export default ContainerUpdate;
