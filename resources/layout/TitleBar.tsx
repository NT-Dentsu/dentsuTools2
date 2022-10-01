import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const NavIcon = styled(Nav.Link).attrs({
    as: NavLink,
    to: '/signin',
})`
    img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: skyblue;
        /* 配置時に上下の幅を持たせる */
        margin-top: 5%;
        margin-bottom: 5%;
    }
`;

const TitleBar = () => (
    <Navbar as="header" bg="dark" variant="dark" sticky="top">
        <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
                NT-dentsu
            </Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Item className="user-icon">
                    <NavIcon>
                        <img src="/assets/default_icon.jpg" />
                    </NavIcon>
                </Nav.Item>
            </Nav>
        </Container>
    </Navbar>
);

export default TitleBar;
