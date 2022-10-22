import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import TitleBar from './TitleBar';

const Layout = ({ isAuth, isLoad }: { isAuth: boolean; isLoad: boolean }) => {
    if (!isLoad && !isAuth)
        alert('このサービスを利用するにはサインインする必要があります。\nサインイン画面に遷移します。');
    // 認証済でないときは、/signinに遷移
    return isAuth || isLoad ? (
        <>
            <TitleBar />
            <Container fluid>
                <Row className="flex-xl-nowrap">
                    <Col xs={12} md={3} lg={2}>
                        <SideBar />
                    </Col>
                    <Col as="main" xs={12} md={9} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    ) : (
        <Navigate to="/signin" />
    );
};
export default Layout;
