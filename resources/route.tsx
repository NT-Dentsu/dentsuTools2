import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Customize from './pages/customize/Customize';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Layout from './layout/Layout';

type MessageResponse = {
    message: string;
};

// 初回レンダリング時に認証済かどうかをチェック
// 認証済かどうかの状態はisAuthが保持し、
// サインイン, サインアウト時にsetAuthで状態を切り替える
const useAuthChecker = () => {
    const [isAuth, setAuth] = useState(false);
    const [isLoad, setLoad] = useState(true);
    useEffect(() => {
        axios
            .get<MessageResponse>('/api/authcheck')
            .then(() => {
                setAuth(true);
                setLoad(false);
            })
            .catch((error: AxiosError<MessageResponse>) => {
                if (error.response !== undefined) {
                    setAuth(false);
                    setLoad(false);
                }
            });
    }, []);
    return { isLoad, isAuth, setAuth };
};

const App = () => {
    const { isLoad, isAuth, setAuth } = useAuthChecker();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isAuth={isAuth} isLoad={isLoad} />}>
                    <Route index element={<Home signout={() => setAuth(false)} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/customize" element={<Customize />} />
                </Route>
                <Route path="/signin" element={<SignIn signin={() => setAuth(true)} />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

const element = document.getElementById('app');
if (element === null) {
    throw new Error('Failed to find the app element');
}
const root = createRoot(element);
root.render(<App />);
