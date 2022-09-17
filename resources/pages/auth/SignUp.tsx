import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from './components/InputForm';

type LoginParams = {
    id: string;
    password: string;
};

interface Response {
    message: string;
}

const Wrapper = styled.div`
    margin: auto;
    width: 50%;
    max-width: 520px;
    h1,
    p {
        text-align: center;
    }
    button {
        display: block;
        margin: auto;
    }
`;
const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    html {
        display: table;
    }
    body {
        display: table-cell;
        vertical-align: middle;
    }
`;

const SignupForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const loginParams: LoginParams = { id, password };
        axios
            .post<Response>('/api/signup', loginParams)
            .then((response) => {
                alert(response.data.message);
                navigate('/signin');
            })
            .catch((error: AxiosError<Response>) => {
                if (error.response !== undefined) alert(error.response.data.message);
            });
    };

    return (
        <Wrapper>
            <GlobalStyle />
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
        </Wrapper>
    );
};

export default SignupForm;
