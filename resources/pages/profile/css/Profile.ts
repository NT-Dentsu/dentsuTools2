/**
 * 制作者：NumLock
 * 制作日：2022/10/29
 * 更新日：
 * 概要：profile.cssをtsにリファクタリング
 */

import styled from 'styled-components';

/* 共通 */
export const Profile = styled.div`
    font-size: 24px;
`;

/* ユーザーアイコンのCSS */
export const UserIcon = styled(Profile)`
    /* ファイル選択ボックスの基準にする */
    position: relative;
    /* 円形にする */
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: skyblue;
    /* 中央寄せにする */
    margin-left: auto;
    margin-right: auto;
    /* 縦の配置を調整する */
    margin-top: 2%;
`;

/* ユーザーアイコンの画像のCSS */
export const UserIconImg = styled(UserIcon.withComponent('img'))`
    /* 円形にする */
    width: 300px;
    height: 300px;
    border-radius: 50%;
    &:hover {
        /* 半透明にする */
        opacity: 0.5;
        /* マウス形状を変更する */
        cursor: pointer;
    }
`;

export const UserIconInput = styled(UserIcon.withComponent('input'))`
    /* ユーザーアイコンクラスからの相対位置を指定する */
    position: absolute;
    top: 75px;
    left: 75px;
    /* サイズ指定する */
    width: 25%;
    /* 本来のボタンは非表示にする */
    display: none;
`;

/* ユーザー名のCSS */
export const UserName = styled(Profile)`
    /* 最大幅を設定する */
    max-width: 385px;
    /* 中央寄せにする */
    margin-left: auto;
    margin-right: auto;
    /* 縦の配置を調整する */
    margin-top: 2%;
`;

export const UserNameImg = styled(UserName.withComponent('img'))`
    /* マウス形状を変更する */
    cursor: pointer;
    &:hover {
        /* カーソルが置かれたときにグレーにする */
        background-color: lightgray;
    }
`;

/* ユーザー名テキストボックスのCSS */
export const UserNameInput = styled(UserName.withComponent('input'))`
    border-color: #f2f2f2;
    /* 下線以外は消す */
    border-top: none;
    border-left: none;
    border-right: none;
    /* クリック時の枠線を消す */
    outline: none;
    margin-left: auto;
    margin-right: auto;
`;

/* パスワードのCSS */
export const Password = styled(Profile)`
    /* 最大幅を設定する */
    max-width: 385px;
    /* 中央寄せにする */
    margin-left: auto;
    margin-right: auto;
    /* 縦の配置を調整する */
    margin-top: 2%;
`;

export const PasswordImg = styled(Password.withComponent('img'))`
    /* マウス形状を変更する */
    cursor: pointer;
    &:hover {
        /* カーソルが置かれたときにグレーにする */
        background-color: lightgray;
    }
`;

/* パスワードテキストボックスのCSS */
export const PasswordInput = styled(Password.withComponent('input'))`
    border-color: #f2f2f2;
    /* 下線以外は消す */
    border-top: none;
    border-left: none;
    border-right: none;
    /* クリック時の枠線を消す */
    outline: none;
`;

/* ボタン群のCSS */
export const ProfileButton = styled(Profile)`
    /* 中央寄せにする */
    text-align: center;
    /* 配置の設定 */
    margin-top: 6%;
    margin-bottom: 10%;
    /* 横並びにする */
    display: flex;
    justify-content: space-around;
`;

/* ボタンのCSS */
export const Button = styled(ProfileButton.withComponent('button'))`
    font-size: 26px;
    /* 最小幅を設定する */
    min-width: 250px;
`;
