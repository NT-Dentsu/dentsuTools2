import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';

const Layout = () => (
    <>
        <header>
            <h1 style={{ textAlign: 'center' }}>タイトルバー</h1>
        </header>
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Col xs={12} md={3} xl={4}>
                    <SideBar />
                </Col>
                <Col as="main" xs={12} md={9} xl={8}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </>
);

export default Layout;
