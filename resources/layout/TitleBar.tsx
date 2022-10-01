import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const TitleBar = () => (
    <Navbar as="header" bg="dark" variant="dark" sticky="top">
        <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
                NT-dentsu
            </Navbar.Brand>
        </Container>
    </Navbar>
);

export default TitleBar;
