import styled from 'styled-components';
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px;
    background-color: #2a6f97;

    a {
        width: 80%;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    width: 80%;
`;

export const Links = styled.div`
    width: 20%;
`;

export const Redirect = styled.div`
    padding: 12px;
    background-color: #8d99ae;
    border-radius: 6px;
    text-align: center;

    &:hover {
        background: ${shade(0.2, "#8d99ae")};
    }
`;