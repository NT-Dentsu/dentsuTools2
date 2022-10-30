/**
 * 制作者：NumLock
 * 制作日：2022/10/29
 * 更新日：
 * 概要：user_icon.cssをtsにリファクタリング
 */

import styled from 'styled-components';

/* ユーザーアイコンクラスのCSS */
export const UserIcon = styled.div`
    /* 円形にする */
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: skyblue;
    /* 配置時に上下の幅を持たせる */
    margin-top: 5%;
    margin-bottom: 5%;
`;

/* ユーザーアイコンクラスの画像のCSS */
export const UserIconImg = styled(UserIcon.withComponent('img'))`
    /* 円形にする(親のオブジェクトが円形のため100%でよい) */
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

/* ユーザーアイコンクリック時のリスト */
export const UserIconListUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    right: 110%;
    /* パネルよりも前面に表示させるため */
    z-index: 10;
`;

/* ユーザーアイコンクリック時のリスト */
export const UserIconListLi = styled.li`
    display: inline;
    padding: 0;
    margin: 0;

    /* ユーザーアイコンクリック時のリストのアイテム */
    & item {
        /* 要素1つ1つはブロックボックス */
        display: block;
        border-top: 1px solid #c0c0c0;
        border-left: 1px solid #c0c0c0;
        border-right: 1px solid #c0c0c0;
        background-color: #eeeeee;
        padding: 3px 15px;
        width: 150px;
        margin: 0px;
        text-align: left;
        font-size: 14px;

        /* ユーザーアイコンクリック時のリストのアイテム(選択時) */
        &:hover {
            /* 普通の矢印にする */
            cursor: default;
            background-color: #a9a9a9;
        }
    }
`;

/* ユーザーアイコンクリック時のリスト(aタグ) */
export const UserIconListLInk = styled(UserIconListLi.withComponent('a'))`
    /* テキスト色はグレー */
    color: #303030;
    /* テキストは装飾なし */
    text-decoration: none;
`;
