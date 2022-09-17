import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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

const SigninForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const loginParams: LoginParams = { id, password };
        axios
            // CSRF保護の初期化
            .get('/sanctum/csrf-cookie')
            .then(() => {
                console.log('csrf-cookieは成功');
                // ログイン処理
                axios
                    .post<MessageResponse>('/api/signin', loginParams)
                    .then((response) => {
                        alert(response.data.message);
                        navigate('/');
                    })
                    .catch((error: AxiosError<MessageResponse>) => {
                        if (error.response !== undefined) alert(error.response.data.message);
                    });
            })
            .catch((error: AxiosError<Response>) => {
                console.log(error.response);
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
                    ログイン
                </Button>
            </Form>
            <p>アカウントを持っていませんか？</p>
            <div className="text-center mb-3">
                <LinkContainer to="/signup">
                    <Button variant="danger" size="lg">
                        登録する
                    </Button>
                </LinkContainer>
            </div>
        </AuthWrapper>
    );
};

export default SigninForm;
