import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-feather';

const SideBar = () => (
    <Nav className="d-flex flex-column d-none d-md-flex">
        <Nav.Item>
            <NavLink to="/">
                <Icon.Home /> Home
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/profile">
                <Icon.User /> Profile
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/customize">
                <Icon.Layout /> Customize
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="#">
                <Icon.File /> Contents
            </NavLink>
        </Nav.Item>
    </Nav>
);

export default SideBar;
