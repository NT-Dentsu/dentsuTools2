import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'react-feather';

// styled componetnts(glid-layout用)をインポート
import * as GridLayout from '../../css/GridLayout';

type MessageResponse = {
    message: string;
};

type User = {
    user_id: string;
    password_hash: string;
    insert_time: string;
};

const Home = () => {
    const greet = "I'm an home component!!!";
    const navigate = useNavigate();
    const logout = () => {
        axios
            .post<MessageResponse>('/api/signout')
            .then((response) => {
                alert(response.data.message);
                navigate('/signin');
            })
            .catch((error: AxiosError<MessageResponse>) => {
                if (error.response !== undefined) alert(error.response.data.message);
            });
    };

    const getUser = () => {
        axios
            .get<User>('/api/user')
            .then((response) => {
                alert(
                    `user_id: ${response.data.user_id}\npassword_hash: ${response.data.password_hash}\n insert_time: ${response.data.insert_time}`
                );
            })
            .catch((error: AxiosError<MessageResponse>) => {
                if (error.response !== undefined) alert(error.response.data.message);
            });
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Home Component
                                <Heart color="red" />
                            </Card.Title>
                            <Card.Text>{greet}</Card.Text>
                        </Card.Body>
                        <Card.Img src="/images/composition.jpg" />
                    </Card>
                    {/* 「GridLayout.Container」という親要素（div 要素）内に配置した「GridLayout.PanelWrap」という要素（div 要素）を整列させる処理を行う */}
                    {/* グリッドレイアウトを使用 */}
                    <GridLayout.Wrapper>
                        <GridLayout.Container>
                            {/* グリッドのサイズ調整用 */}
                            <GridLayout.PanelWrap area="1 / 1" />
                            <GridLayout.PanelWrap area="1 / 2" />
                            <GridLayout.PanelWrap area="1 / 3" />
                            <GridLayout.PanelWrap area="1 / 4" />
                            <GridLayout.PanelWrap area="2 / 1" />
                            <GridLayout.PanelWrap area="3 / 1" />
                            <GridLayout.PanelWrap area="4 / 1" />

                            {/* ここにパネルが追加される */}
                        </GridLayout.Container>
                    </GridLayout.Wrapper>
                </div>
                <Button variant="primary" className="mb-3" size="lg" onClick={logout}>
                    ログアウト
                </Button>
                <Button variant="primary" className="mb-3" size="lg" onClick={getUser}>
                    ユーザ情報取得
                </Button>
            </div>
        </div>
    );
};

export default Home;
