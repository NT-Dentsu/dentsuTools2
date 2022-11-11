/**
 * 制作者：NumLock
 * 制作日：2022/10/22
 * 更新日：2022/10/29
 * 説明：dashboard.cssをsyled-compornentsで書き直し
 */

// 要らない気がするので保留
// やっぱりいる

import styled from 'styled-components';

export const Body = styled.div`
    font-size: 0.875rem;
`;

export const Feather = styled.div`
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
`;

/*
 * サイドバー
 */
export const Sidebar = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
`;

/* スクロール時の張り付き設定 */
export const SidebarSticky = styled.div`
    position: sticky;
    top: 4rem;
    padding-top: 2rem;
    overflow-x: hidden;
    overflow-y: auto;
`;

/* サイドバーに表示する要素のスタイル */
export const NavLink = styled(Sidebar.withComponent('a'))`
    font-weight: 500;
    color: #333;
    &.active {
        color: #007bff;
    }
    &.active .feather {
        color: inherit;
    }
    &:hover .feather {
        color: inherit;
    }
`;

/* サイドバーに表示する要素のアイコン */
export const NavLinkFeather = styled(NavLink.withComponent('div'))`
    margin-right: 4px;
    color: #999;
`;

/*
 * タイトルバー
 */
export const NavbarBrand = styled.a`
    padding-top: 0.8%;
    padding-bottom: 0.8%;
    font-size: 28px;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
`;
