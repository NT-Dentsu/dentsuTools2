import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Customize from './pages/customize/Customize';
import Auth from './pages/auth/Auth';
import Layout from './layout/Layout';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/customize" element={<Customize />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    </BrowserRouter>
);

const element = document.getElementById('app');
if (element === null) {
    throw new Error('Failed to find the app element');
}
const root = createRoot(element);
root.render(<App />);
