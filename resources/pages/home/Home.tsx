import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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
                            <Card.Title>Home Component</Card.Title>
                            <Card.Text>{greet}</Card.Text>
                        </Card.Body>
                        <Card.Img src="/images/composition.jpg" />
                    </Card>
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
