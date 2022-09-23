import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
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
);

export default SideBar;
