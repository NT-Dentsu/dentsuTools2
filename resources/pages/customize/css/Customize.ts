/*
 * 制作者：NumLock
 * 制作日：2022/10/22
 * 更新日：
 * カスタマイズ画面用css
 */

import styled from 'styled-components';

// /* Lightbox2の諸々をカスタマイズ */
// #lightbox .lb-container {
//     padding: 3px;
// }

/* 横並びにするためにflexboxを使用 */
export const CustomizeFlex = styled.div`
    display: flex;
`;

export const Preview = styled(CustomizeFlex)`
    width: 60%;
    display: block;
`;

export const Menu = styled(CustomizeFlex)`
    width: 40%;
    margin-left: 1.5%;
    display: block;
`;

/* タブメニュー用のCSS */
export const MenuUl = styled(Menu.withComponent('ul'))`
    display: block;
    /* float: left; */
    margin: 0px;
    padding: 0px;
    list-style: none;
    overflow: hidden;
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
    background: #555;
`;

export const MenuLi = styled(Menu.withComponent('li'))`
    border-bottom: 1px solid #000;
    margin-bottom: 1px;
    text-align: center;
    padding: 0px;
    width: calc(100% / 3);
    height: 100%;

    /* リストを横並びに */
    float: left;
`;
/*
#customize_flex #menu li:last-child{
	margin-bottom: 0px;
	border-bottom: 0px;
}
 */
export const MenuLiLabel = styled(MenuLi.withComponent('a'))`
    display: block;
    font-size: 14pt;
    color: #000;
    text-decoration: none;
    padding: 7%;
    height: 100%;
    background: #eee;
    /* background: -webkit-linear-gradient(top,#444,#333); */
    /* background: -moz-linear-gradient(top,#444,#333); */

    /* 縦書き */
    /* writing-mode: vertical-rl; */
    /* text-orientation: sideways; */
    /* padding: 20%; */

    &.selected {
        background: #000;
        color: #eee;
    }
`;

export const MenuTab = styled(Menu)`
    /* display: block; */
    /* float: left; */
    background: #eee;
    background-color: #eee;
    /* width: 100%; */
    min-height: 80%;
    height: fit-content;
`;

/* 各メニューのCSS */
/* パネル */
export const Panel = styled.div`
    flex-wrap: wrap;
`;
export const PanelThumbnail = styled(Panel)`
    display: flex;
    background-color: limegreen;
    width: 40%;
    height: auto;
    margin: 2.5%;
`;
export const PanelThumbnailLabel = styled(PanelThumbnail.withComponent('label'))`
    width: 200px;
    margin: 0 10% 0 0;
`;
export const PanelThumbnailImg = styled(PanelThumbnail.withComponent('img'))`
    /* 画像は初期値でドラッグ可能 */
    width: 100%;
`;

/* コンテンツ */
export const Contents = styled.div`
    flex-wrap: wrap;
`;

/* プリセット */
export const Preset = styled.div`
    /* display: flex; */
    flex-wrap: wrap;
`;

export const PresetThumbnail = styled(Preset)`
    display: block;
    background-color: darkmagenta;
    width: 50%;
    height: auto;
    margin: 2.5%;
`;

export const PresetThumbnailImg = styled(PresetThumbnail.withComponent('img'))`
    width: 50%;
    height: 50%;
`;

/* profile.cssからパク */
/* ボタン群のCSS */
export const CustomizeButton = styled.div`
    /* 中央寄せにする */
    text-align: center;
    /* 配置の設定 */
    margin-top: 6%;
    margin-bottom: 10%;
    /* 横並びにする */
    display: flex;
    /* 右寄せ */
    justify-content: flex-end;
    /* 隙間 */
    gap: 5%;
`;

/* ボタンのCSS */
export const Button = styled(CustomizeButton.withComponent('button'))`
    font-size: 26px;
    /* 最小幅を設定する */
    min-width: 250px;
`;
