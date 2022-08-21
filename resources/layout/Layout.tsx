import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
    <div>
        <div>
            <h1 style={{ textAlign: 'center' }}>タイトルバー</h1>
        </div>
        <div>
            <h2>サイドバー</h2>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/customize">Customize</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Signin</NavLink>
                </li>
            </ul>
        </div>
        <Outlet />
    </div>
);

export default Layout;
