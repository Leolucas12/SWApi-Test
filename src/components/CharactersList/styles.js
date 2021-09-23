import { shade } from 'polished';
import styled from 'styled-components';
import chars from '../../assets/chars.jpg';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;

    div {
        width: 100%;
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 12px;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #333533;
    border-radius: 6px;
    text-align: center;
    border: none;
    color: #ffee32;
    
    &:hover {
        background: ${shade(0.2, "#333533")};
        cursor: pointer;
    }
`;

export const Title = styled.div`
    font-size: 48px;
    font-family: 'Secular One', sans-serif;
    color: #ffee32;
    text-align: center;
`;