import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    div {
        width: 100%;
        margin-bottom: 5px;
    }
`;

export const LoadMore = styled.div`
    padding: 12px;
    background-color: #8d99ae;
    border-radius: 6px;
    text-align: center;
    
    &:hover {
        background: ${shade(0.2, "#8d99ae")};
        cursor: pointer;
    }
`;