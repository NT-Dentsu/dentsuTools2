import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => (
    <div>
        <div>
            <h1 style={{ textAlign: 'center' }}>タイトルバー</h1>
        </div>
        <SideBar />
        <Outlet />
    </div>
);

export default Layout;
