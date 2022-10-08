import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import * as Icon from 'react-feather';
import styled from 'styled-components';

const SidePanel = styled(Nav)`
    background-color: #f7f7f7;
    @media (min-width: 768px) {
        // md(768px)以上のとき適用
        position: sticky;
        top: 0;
        height: 100vh;
        z-index: 1000;
        border-right: 1px solid #ececec;
    }
`;

const NavWrapper = styled.div`
    // collapseがfalseでもmd以上のときは強制して表示
    @media (min-width: 768px) {
        display: flex !important;
        height: 100% !important;
        flex-direction: column;
        max-height: calc(100vh - 8.5rem);
    }

    // Nav.Itemは.nav-itemを持つ, NavLinkはaを持つ
    .nav-item a {
        font-weight: bold;
        color: #333;
        text-decoration: none; // aタグの下線無効
    }
    .nav-item a.active {
        color: #007bff;
    }
    .nav-item:hover {
        opacity: 0.5;
    }
    .nav-item {
        margin-left: 10%;
    }
`;

const MenuButton = styled(Button).attrs({ variant: 'link' })`
    line-height: 1;
    color: #212529;
`;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <SidePanel className="d-flex flex-column">
            <MenuButton className="p-0 d-md-none ms-3" onClick={() => setCollapsed(!collapsed)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                    <title>Menu</title>
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="M4 7h22M4 15h22M4 23h22"
                    />
                </svg>
            </MenuButton>
            <Collapse in={collapsed}>
                <NavWrapper>
                    <Nav.Item>
                        <NavLink to="/">
                            <Icon.Home size={16} /> Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/profile">
                            <Icon.User size={16} /> Profile
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/customize">
                            <Icon.Layout size={16} /> Customize
                        </NavLink>
                    </Nav.Item>
                </NavWrapper>
            </Collapse>
        </SidePanel>
    );
};

export default SideBar;
