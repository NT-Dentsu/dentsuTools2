import styled, { createGlobalStyle } from 'styled-components';

export const AuthWrapper = styled.div`
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

export const AuthGlobalStyle = createGlobalStyle`
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
