import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import TitleBar from './TitleBar';

const Layout = () => (
    <>
        <header>
            <TitleBar />
        </header>
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
);

export default Layout;
