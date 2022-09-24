import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthWrapper, AuthGlobalStyle } from './css/GlobalView';
import InputForm from './components/InputForm';

type LoginParams = {
    id: string;
    password: string;
};

type MessageResponse = {
    message: string;
};

const SignupForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const loginParams: LoginParams = { id, password };
        axios
            .post<MessageResponse>('/api/signup', loginParams)
            .then((response) => {
                alert(response.data.message);
                navigate('/signin');
            })
            .catch((error: AxiosError<MessageResponse>) => {
                if (error.response !== undefined) alert(error.response.data.message);
            });
    };

    return (
        <AuthWrapper>
            <AuthGlobalStyle />
            <h1>
                <Link to="/">Dentsu Tools</Link>
            </h1>
            <p>半角英数字ハイフン，6文字以上20文字以内 で入力してください</p>
            <Form>
                <InputForm idform={{ id, setId }} pwform={{ password, setPassword }} />
                <Button variant="primary" className="mb-3" size="lg" onClick={handleClick}>
                    登録する
                </Button>
            </Form>
            <p>
                <Link to="/signin">ログイン画面へ戻る</Link>
            </p>
        </AuthWrapper>
    );
};

export default SignupForm;
