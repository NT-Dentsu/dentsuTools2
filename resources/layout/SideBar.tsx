import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-feather';
import styled from 'styled-components';

const SidePanel = styled(Nav)`
    background-color: #f7f7f7;
    @media (min-width: 768px) {
        // md(768px)以上のとき適用
        position: sticky;
        top: 4rem;
        z-index: 1000;
        height: calc(100vh - 4rem);
        border-right: 1px solid #ececec;
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

const SideBar = () => (
    <SidePanel className="d-flex flex-column">
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
    </SidePanel>
);

export default SideBar;
