import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
    width: 100%;
    background-color: #3d5a80;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MovieButton = styled.div`
    padding: 12px;
    background-color: #3d5a80;
    text-align: center;
    color: white;
    width: 10%;

    &:hover {
        cursor: pointer;
    }
`;