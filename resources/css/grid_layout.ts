/**
 * 制作者：NumLock
 * 制作日：2022/09/10
 * 更新日：
 * グリッドレイアウト用のcssをstyled-componentsで書きたいやつ
 */

// import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    max-width: 1980px;
    margin: 0 auto; /*全体の中央寄せ*/
`;

export const Container = styled.div`
    width: 100%;
    margin: 0 auto; /*中央寄せ*/
    position: relative;

    /* グリッドエリアを正方形にする */
    /* padding-bottom: 100%; */

    display: grid; /* グリッドレイアウト */

    /* 4*4のグリッドを定義 */
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    /* グリッド間の間隔 */
    gap: 1.25%;
`;

// パネル用

// propsのためのtype
type Props = {
    area: string;
    name?: string; // 任意要素にする
};
// panelを正方形にする用
export const PanelWrap = styled.div`
    width: 100%;
    /* padding-bottom: 100%; */
    margin: 0px;
    z-index: 10;
    /* grid-areaをpropで指定 */
    grid-area: ${(props: Props) => props.area};
    name:${(props: Props) => props.name}

    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

// panel自体
const Panel = styled.div`
    background-color: aqua;
    /* padding内を塗りつぶし */
    background-clip: content-box;
    /* margin: 10px; */
    padding: 0px;
    margin: 0px;
    /* border: 1px solid #eee; */
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    z-index: 20;
`;

export const PanelS = styled(Panel)`
    background-color: darkblue;
`;

export const PanelM = styled(Panel)`
    background-color: brown;
`;

export const PanelL = styled(Panel)`
    background-color: darkgreen;
`;

// 画像周りの設定
export const PanelImg = styled.img`
    /* position: absolute; */
    width: 100%;
    height: 100%;

    /* object-fitでトリミング */
    object-fit: cover;
`;
