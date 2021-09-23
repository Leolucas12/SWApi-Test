import styled from 'styled-components';
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px;
    background-color: #333533;

    a {
        width: 100%;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    width: 70%;
    font-family: 'Secular One', sans-serif;
`;

export const Links = styled.div`
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`;

export const GoTo = styled.a`
    padding: 12px;
    background-color: #333533;
    border-radius: 6px;
    text-align: center;
    font-family: 'Secular One', sans-serif;

    &:hover {
        background: ${shade(0.2, "#333533")};
    }
`;